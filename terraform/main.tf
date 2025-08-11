terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.20.0"
    }
  }
}

# Provider principal - usa la región de tus variables
provider "aws" {
  region = var.region
}

# Provider específico para ACM en us-east-1 (obligatorio para certificados usados con CloudFront)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

# Política de bucket para permitir acceso desde CloudFront
resource "aws_s3_bucket_policy" "frontend_bucket_policy" {
  bucket = data.aws_s3_bucket.frontend_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = { 
          Service = "cloudfront.amazonaws.com" 
        }
        Action    = "s3:GetObject"
        Resource  = "${data.aws_s3_bucket.frontend_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.frontend_distribution.arn
          }
        }
      }
    ]
  })
}

# Configuración del bucket como sitio web (necesario para React SPA)
resource "aws_s3_bucket_website_configuration" "frontend_website" {
  bucket = data.aws_s3_bucket.frontend_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Habilitar encriptación del lado del servidor
resource "aws_s3_bucket_server_side_encryption_configuration" "frontend_encryption" {
  bucket = data.aws_s3_bucket.frontend_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"  # Encriptación gratuita
    }
  }
}

# CloudFront Origin Access Control (OAC)
resource "aws_cloudfront_origin_access_control" "frontend_oac" {
  name                              = "frontend-${var.env}-oac"
  description                       = "OAC for React capo"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Zona DNS para tu dominio
resource "aws_route53_zone" "main" {
  name = "capoacademy.com"
  comment = "Zona DNS para capoacademy.com"
}

# Certificado SSL para tu dominio
resource "aws_acm_certificate" "cert" {
  provider = aws.us_east_1
  domain_name = "capoacademy.com"
  subject_alternative_names = ["www.capoacademy.com"]
  validation_method = "DNS"
  
  lifecycle {
    create_before_destroy = true
  }
}

# Validación del certificado usando registros DNS
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  name    = each.value.name
  type    = each.value.type
  zone_id = aws_route53_zone.main.zone_id
  records = [each.value.record]
  ttl     = 60
}

# Asegurarse de que el certificado está validado
resource "aws_acm_certificate_validation" "cert" {
  provider = aws.us_east_1
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# Distribución CloudFront
resource "aws_cloudfront_distribution" "frontend_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = var.price_class
  comment             = "React Frontend - ${var.env} - Free Tier Optimized"
  
  # Importante: agregar aliases para dominios personalizados
  aliases = ["capoacademy.com", "www.capoacademy.com"]
  
  # Origen S3
  origin {
    domain_name              = data.aws_s3_bucket.frontend_bucket.bucket_regional_domain_name
    origin_id                = "S3-${var.frontend_bucket_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.frontend_oac.id
  }
  
  # Comportamiento de caché optimizado
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.frontend_bucket_name}"
    
    cache_policy_id          = data.aws_cloudfront_cache_policy.optimized.id
    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.s3_origin.id
    
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }
  
  # Configuración para SPA React Router
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 3600
  }
  
  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 3600
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  
  # Configuraciones para optimizar costos
  http_version        = "http2"        
  wait_for_deployment = false
  
  # Esperamos a que el certificado esté validado para evitar errores
  depends_on = [aws_acm_certificate_validation.cert]
}

# Registros DNS para usar el dominio con CloudFront
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www.capoacademy.com"
  type    = "A"
  
  alias {
    name                   = aws_cloudfront_distribution.frontend_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.frontend_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Registro para el apex domain (sin www)
resource "aws_route53_record" "apex" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "capoacademy.com"
  type    = "A"
  
  alias {
    name                   = aws_cloudfront_distribution.frontend_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.frontend_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Outputs requeridos
output "frontend_bucket_name" {
  value = var.frontend_bucket_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.frontend_distribution.id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.frontend_distribution.domain_name
  description = "URL de CloudFront para acceder a la aplicación"
}

output "nameservers" {
  value = aws_route53_zone.main.name_servers
  description = "Nameservers para configurar en tu proveedor de dominios"
}