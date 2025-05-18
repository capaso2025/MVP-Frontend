import { Button, Typography } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import capitoDesk from '@/assets/capito-desk.webp';
function Landing() {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen place-content-center bg-gradient-to-br from-[#ccdae4] to-[#6b7091]">
      <div className="mx-auto grid w-[90%] grid-cols-1 md:grid-cols-2 lg:max-w-7xl xl:w-full">
        <div className="mx-auto grid max-w-[80%] grid-rows-[max-content_auto] gap-16 md:mx-0">
          <Typography variant="h2" className="text-primary-light">
            CAPO
          </Typography>
          <div className="text-center md:text-left">
            <Typography variant="h1" as="h1" className="text-primary-light">
              Hoy comienza tu transformación
            </Typography>
            <Typography className="text-secondary-dark mt-4 text-xl">
              ¿Listo para convertirte en un CAPO?
            </Typography>
            <div className="mt-14 grid grid-cols-1 gap-4">
              <Button
                onClick={() => navigate('/onboarding/categories')}
                size="lg"
              >
                Comenzar
              </Button>
              <Button
                onClick={() => navigate('/login')}
                variant="secondary"
                size="lg"
              >
                Tengo una cuenta
              </Button>
            </div>
          </div>
        </div>
        <img
          src={capitoDesk}
          className="hidden justify-self-end md:block"
          alt="capito en el escritorio"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}

export default Landing;
