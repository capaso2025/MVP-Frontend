import { Button, Typography } from '@/shared/ui';
import Input from '@/shared/ui/atoms/Input/Input';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OnboardingIntro() {
  const navigate = useNavigate();
  const [introDetails, setIntroDetails] = useState(true);
  const handleContinue = () => {
    setIntroDetails(false);
  };

  const goToOnboarding = () => {
    navigate('/onboarding/questions');
  };
  return (
    <OnboardingLayout
      title={
        introDetails ? (
          '¿Listo para descubrir tu perfil Capaso?'
        ) : (
          <div className="text-center">
            <Typography
              variant="h4"
              className="ml-4 hidden font-normal text-white sm:block"
            >
              Antes de comenzar, necesitamos saber un poco más de ti
            </Typography>
            <Typography
              variant="h4"
              className="ml-4 hidden font-normal text-white sm:block"
            >
              ¿Como te llamas?
            </Typography>
          </div>
        )
      }
    >
      <div className="mx-auto grid h-full w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        {introDetails ? (
          <IntroDetails navigate={handleContinue} />
        ) : (
          <NamesForm navigate={goToOnboarding} />
        )}
      </div>
    </OnboardingLayout>
  );
}

export default OnboardingIntro;

const IntroDetails = (props: { navigate: () => void }) => {
  const { navigate } = props;
  return (
    <>
      <Typography
        variant="h5"
        className="text-secondary mt-16 text-center font-normal"
      >
        Este test desbloqueará tu avatar, hábitos clave y<br /> tu plan de
        evolución
      </Typography>
      <div className={`grid place-content-center gap-16`}>
        <div className="mx-auto grid max-w-[40%] grid-cols-2 place-content-center">
          <img
            src="/assets/characters/herramienta.png"
            width={250}
            height={250}
          />
          <div className="grid place-content-center">
            <Typography>
              Estoy calibrando mis sensores... responde con calma y te mostraré
              tu verdadero potencial
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-10 flex h-max w-full justify-center">
        <Button variant="landing" onClick={navigate}>
          Ir al siguiente paso
        </Button>
      </div>
    </>
  );
};

const NamesForm = ({ navigate }: { navigate: () => void }) => {
  return (
    <div className="mx-auto flex w-[50%] flex-col items-center justify-center">
      <Input
        variant="dark"
        containerClassName="w-full"
        label="Ingresa tu nombre"
        inputSize="lg"
      />
      <Input
        variant="dark"
        type="number"
        containerClassName="w-full mt-4"
        label="Ingresa tu edad"
        inputSize="lg"
      />
      <Button variant="landing" className="mt-8 w-[75%]" onClick={navigate}>
        Comenzar aventura
      </Button>
    </div>
  );
};
