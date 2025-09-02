import { Button, Typography } from '@/shared/ui';
import capitoDesk from '@/assets/capito-desk.webp';
import logo from '@/assets/capo-logo.png';
import { useNavigate } from '@tanstack/react-router';

function Main() {
  const navigate = useNavigate();
  return (
    <div
      id="inicio"
      className="mt-20 grid h-auto grid-cols-1 gap-12 place-content-center md:grid-cols-2 lg:-mt-10 lg:h-[calc(100vh-60px)]"
    >
      <div className="z-[1] mx-auto grid grid-rows-[max-content_auto] place-content-center gap-16 md:mx-0">
        <div className="text-center md:text-left">
          <Typography variant="h1" as="h1" className="text-white line-clamp-2">
            Hoy comienza tu transformación
          </Typography>
          <Typography variant="h5" className="text-secondary mt-4 font-normal">
            ¿Listo para convertirte en un{' '}
            <Typography as="strong" className="text-primary-2">
              CAPASO
            </Typography>
            ?
          </Typography>
          <div className="mt-14 grid grid-cols-1 gap-4 lg:w-[80%]">
            <Button
              onClick={() => navigate({
                to: "/onboarding"
              })}
              size="md"
              variant="landing"
            >
              Comenzar
            </Button>
            <Button onClick={() => navigate({
              to: "/login"
            })} variant="secondary">
              Tengo una cuenta
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center md:mx-0">
        <img
          src={capitoDesk}
          className="mask-transparent-bottom z-10 mr-0 ml-auto w-[400px] object-cover rounded-3xl md:block md:w-[600px] md:justify-self-end"
          alt="capito en el escritorio"
          width={600}
          height={500}
        />
      </div>
      <img
        src={logo}
        alt="Capaso logo"
        className="absolute top-[25vh] left-[-25vw] z-0 opacity-[2%]"
        width={800}
      />
    </div>
  );
}

export default Main;
