import { onboarding } from '@/features/onboarding/onboarding-http';
import { Button, Progress, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { Loader, XCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useOnboardingStore } from '../../store/onboarding-store';
import { useTranslation } from 'react-i18next';

function Results() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const registerData = useOnboardingStore((state) => state.registerData);
  const responses = useOnboardingStore((state) => state.responses);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      if (!registerData.name || registerData.age === 0) return setLoading(false);
      setLoading(true);
      const questions: Record<string, string | number> = {};
      responses.forEach((response) => {
        questions[response.id] = isNaN(Number(response.response.value))
          ? response.response.value
          : Number(response.response.value);
      });
      const result = await onboarding({
        ...questions,
        age: registerData.age,
        firstName: registerData.name,
      });
      console.log(result)
      setLoading(false);
      if (result) {
        setSuccess(true);
        sessionStorage.setItem('user.id', result.user.id);
        sessionStorage.setItem('user.firstName', result.user.firstName);
        sessionStorage.setItem('profile.name', result.profile.name);

      }
    })();
  }, [registerData.age, registerData.name]);

  return (
    <OnboardingLayout
      title={loading ? '' : `Así empezaremos ${registerData.name}`}
    >
      {loading ? (
        <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] place-content-center py-4 xl:w-full">
          <div className="flex flex-col items-center gap-8">
            <Loader className="text-primary-2 scale-200 animate-spin" />
            Generando ruta de aprendizaje...
          </div>
        </div>
      ) : !success ? (
        <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] place-content-center py-4 xl:w-full">
          <div className="flex flex-col items-center gap-8">
            <XCircleIcon className="text-primary-2 scale-200" size={35} />
            <p>Ups! Ha ocurrido un error.</p>
            <Button onClick={() => navigate({
              to: '/onboarding'
            })} variant="landing">
              Volver a intentar
            </Button>
          </div>
        </div>
      ) : (
        <div className="mx-auto grid h-[90%] w-[90%] grid-rows-[auto_max-content]">
          <Typography variant="h3" className="mt-20 text-center">
            {t(sessionStorage.getItem("profile.name") || "")}
          </Typography>
          <div className="mx-auto mt-8 block w-[80%] grid-cols-2 place-content-center gap-8 md:grid">
            <div className="grid gap-8 md:gap-4">
              {['Tiempo', 'Foco', 'Soft Skills', 'Bienestar'].map(
                (el, index) => (
                  <div className="grid grid-cols-[100px_auto] gap-8">
                    <Typography className='text-white'>{el}</Typography>
                    <Progress value={index * 25} size="lg" variant="warning" />
                  </div>
                ),
              )}
            </div>
            <img
              src="/assets/characters/capito-happy.png"
              className="mx-auto hidden md:block"
              alt="herramienta"
              width={300}
            />
          </div>
          <div className="mt-8 flex items-center justify-end">
            <Button
              onClick={() => navigate({
                to: '/onboarding/finish'
              })}
              variant="landing"
            >
              Continuar
            </Button>
          </div>
        </div>
      )
      }
    </OnboardingLayout >
  );
}

export default Results;
