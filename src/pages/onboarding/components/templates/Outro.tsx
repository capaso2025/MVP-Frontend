import { Button, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useNavigate } from 'react-router-dom';

function OnboardingIntro() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/home');
  };
  return (
    <OnboardingLayout
      title={'¿¡Ya tenemos tu perfil, y esto es solo el comienzo!'}
    >
      <div className="mx-auto grid h-full w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        {<IntroDetails navigate={gotoHome} />}
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
        Todo lo que vivas aquí está diseñado con ciencia, mentoría e innovación
        para <br />
        ayudarte a avanzar con resultados que incluso tus padres podrán ver.
      </Typography>
      <div className={`grid place-content-center gap-16`}>
        <Typography className="font-normal" variant="h4">
          ¿Estás listo para construir esta historia?
        </Typography>
      </div>
      <div className="mt-20 flex h-max w-full justify-center">
        <Button
          variant="landing"
          onClick={navigate}
          className="w-[75%] md:w-[50%] lg:w-[30%] xl:w-[20%]"
        >
          Empezar
        </Button>
      </div>
    </>
  );
};
