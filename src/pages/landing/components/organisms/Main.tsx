import { Button, Typography } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import capitoDesk from '@/assets/capito-desk.webp';

function Main() {
  const navigate = useNavigate();
  return (
    <div
      id="inicio"
      className="mt-10 grid h-auto grid-cols-1 place-content-center md:grid-cols-2 lg:-mt-20 lg:h-[calc(100vh-60px)]"
    >
      <div className="mx-auto grid max-w-[80%] grid-rows-[max-content_auto] place-content-center gap-16 md:mx-0">
        <div className="text-center md:text-left">
          <Typography variant="h1" as="h1" className="text-primary-light">
            Hoy comienza tu transformación
          </Typography>
          <Typography
            variant="h5"
            className="text-secondary-dark mt-4 font-normal"
          >
            ¿Listo para convertirte en un{' '}
            <Typography as="strong" className="text-primary">
              CAPO
            </Typography>
            ?
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
      <div className="mx-auto flex justify-center md:mx-0">
        <img
          src={capitoDesk}
          className="mask-transparent-bottom mr-0 ml-auto w-[400px] rounded-3xl md:block md:w-[600px] md:justify-self-end"
          alt="capito en el escritorio"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}

export default Main;
