import { Typography } from '@/shared/ui';

function Footer() {
  return (
    <footer className="pb-4 text-center">
      <div className="flex justify-between">
        <div className="flex justify-between text-center">
          <div className="text-left">
            <Typography variant="body1" className="text-foreground-secondary">
              Correo de contacto
            </Typography>
            <Typography variant="h6" className="text-white">
              servicioalcliente@capo.host
            </Typography>
          </div>
        </div>
        <div className="w-max">
          <Typography variant="body1" className="text-foreground-secondary">
            Síguenos
          </Typography>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/capo_latam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/social-media/instagram.png" width={30} />
            </a>
            <a href="#">
              <img src="/assets/social-media/linkedin.png" width={30} />
            </a>
          </div>
        </div>
      </div>
      <Typography className="text-foreground-secondary mt-8">
        CAPASO 2025
      </Typography>
    </footer>
  );
}

export default Footer;
