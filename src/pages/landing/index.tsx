import { Button, Typography } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import capitoDesk from '@/assets/capito-desk.webp';
import Spacer from '@/shared/ui/atoms/Spacer';
import InfoSection from './components/organisms/InfoSection';
import SelectorUserType from './components/organisms/SelectorUserType';
function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#ccdae4] to-[#6b7091]">
      <div className='mx-auto w-[90%] lg:max-w-6xl xl:w-full'>
        <Spacer size="3xl" />
        <div className="grid grid-cols-1 md:grid-cols-2">
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
            className="hidden justify-self-end md:block ml-auto mr-0"
            alt="capito en el escritorio"
            width={600}
            height={500}
          />
        </div>
        <Spacer size="3xl" />
        <InfoSection
          title="Respaldado por psicólogos"
          color='text-white'
          image='/assets/characters/capito-university.png' imgPosition="left" description="Cada herramienta y contenido ha sido desarrollado con el acompañamiento de psicólogos especializados en adolescentes y jóvenes. Tu bienestar emocional es tan importante como tu crecimiento académico y personal." />
        <Spacer size="3xl" />
        <InfoSection
          title='Mantén tu motivación'
          image='/assets/characters/capito-ladders.png' imgPosition="right" description="En Capo, convertimos tu progreso en pequeñas victorias diarias que te mantienen motivado y con ganas de seguir. Porque avanzar también puede sentirse bien, desde el primer paso." />
        <Spacer size="3xl" />
        <SelectorUserType />
        <Spacer size="3xl" />
      </div>
    </div>
  );
}

export default Landing;
