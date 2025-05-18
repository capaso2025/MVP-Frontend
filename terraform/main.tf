terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.20.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# Política de bucket para permitir acceso desde CloudFront
#requerido
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

# Habilitar compresión GZIP para reducir el tamaño de transferencia
resource "aws_s3_bucket_server_side_encryption_configuration" "frontend_encryption" {
  bucket = data.aws_s3_bucket.frontend_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"  # Encriptación gratuita que no afecta la factura
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

# Distribución CloudFront
resource "aws_cloudfront_distribution" "frontend_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = var.price_class
  comment             = "React Frontend - ${var.env} - Free Tier Optimized"
  
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
    
    # Política de caché gestionada para maximizar la proporción de aciertos de caché
    cache_policy_id          = data.aws_cloudfront_cache_policy.optimized.id
    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.s3_origin.id
    
    compress               = true  # Habilitamos compresión para reducir tamaño de transferencia
    viewer_protocol_policy = "redirect-to-https"
  }
  
  # Configuración para SPA React Router
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 3600  # Caché de 1 hora para reducir solicitudes
  }
  
  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 3600  # Caché de 1 hora para reducir solicitudes
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  viewer_certificate {
    cloudfront_default_certificate = true
  }
  
  # Configuraciones adicionales para optimizar costos
  http_version        = "http2"        
  wait_for_deployment = false           
}

# Outputs necesarios
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