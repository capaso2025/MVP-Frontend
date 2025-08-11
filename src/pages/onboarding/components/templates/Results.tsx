// import { register } from '@/features/onbording/registerHttpCall';
// import { register } from '@/features/onbording/registerHttpCall';
import { Button, Progress, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useOnboardingStore } from '../../store/onboarding-store';

function Intro() {
  const navigate = useNavigate();
  // const registerData = useOnboardingStore((state) => state.registerData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // const response = await register(registerData);
      // if (response) {
      //   setLoading(false);
      // }
    })();
  }, []);

  return (
    <OnboardingLayout
      title={loading ? '' : 'Así empezaremos Fernando: Explorador sin rumbo'}
    >
      {loading ? (
        <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] place-content-center py-4 xl:w-full">
          <div className="flex flex-col items-center gap-8">
            <Loader className="text-primary-2 scale-200 animate-spin" />
            <p>Generando ruta de aprendizaje...</p>
          </div>
        </div>
      ) : (
        <div className="mx-auto grid h-[90%] w-[90%] grid-rows-[auto_max-content]">
          <div className="mx-auto mt-8 grid w-[80%] grid-cols-2 place-content-center gap-8">
            <div className="grid gap-4">
              {[1, 2, 3, 4].map((el) => (
                <div className="flex items-center gap-8">
                  <Typography>Tiempo</Typography>
                  <Progress value={el * 25} size="lg" />
                </div>
              ))}
            </div>
            <img
              src="/assets/characters/capito-happy.png"
              className="mx-auto"
              alt="herramienta"
              width={300}
            />
          </div>
          <div className="mt-8 flex items-center justify-end">
            <Button
              onClick={() => navigate('/onboarding/outro')}
              variant="landing"
            >
              Continuar
            </Button>
          </div>
        </div>
      )}
    </OnboardingLayout>
  );
}

export default Intro;
