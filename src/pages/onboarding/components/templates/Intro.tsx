import { Button, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useNavigate } from 'react-router-dom';

function OnboardingIntro() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout title="¿Listo para descubrir tu perfil Capaso?">
      <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        <Typography
          variant="body1"
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
                Estoy calibrando mis sensores... responde con calma y te
                mostraré tu verdadero potencial
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-10 flex h-max w-full justify-center">
          <Button
            variant="landing"
            onClick={() => {
              navigate('/onboarding/questions');
            }}
          >
            Empezar diagnóstico
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default OnboardingIntro;
