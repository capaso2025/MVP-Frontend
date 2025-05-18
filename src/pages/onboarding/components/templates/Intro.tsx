import { useBackNext } from '@/shared/hooks/useBackNext';
import { Button } from '@/shared/ui';
import SpeechBubble from '@/shared/ui/atoms/speech-bubble';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OnboardingIntro() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const { currentIndex, goToNext, goToPrevious } = useBackNext({
    length: 3,
    finishFn: () => {
      navigate('/onboarding/questions');
    },
  });

  const messages = [
    'Hola soy Capito!',
    'Antes que inicies tu camino...',
    'Recuerda, tu voz tiene poder. Y cuando aprendes a usarla con seguridad, puedes abrirte a nuevas oportunidades, crear relaciones auténticas y liderar con confianza. ¡Vamos a desarrollar esa versión fuerte y clara de ti!',
  ];
  return (
    <OnboardingLayout>
      <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[auto_max-content] py-4 xl:w-full">
        <div
          className={`grid place-content-center ${animate ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
          <SpeechBubble
            text={messages[currentIndex] || ''}
            backgroundColor="bg-primary-lighter"
            className="mb-4 max-w-[300px] scale-150"
          />
          <br />
          <img
            src="/assets/characters/capito-happy.png"
            className="mx-auto"
            width={150}
            height={150}
          />
          <br />
        </div>
        <div className="flex h-max w-full justify-between">
          <Button size="lg" variant="secondary" onClick={goToPrevious}>
            Anterior
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setAnimate(true);
              setTimeout(() => {
                goToNext();
                setAnimate(false);
              }, 500);
            }}
          >
            Avanzar
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default OnboardingIntro;
