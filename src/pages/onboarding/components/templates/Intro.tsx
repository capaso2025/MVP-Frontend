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
    length: 2,
    finishFn: () => {
      navigate('/onboarding/questions');
    },
    previousFn: () => {
      navigate('/onboarding/categories');
    },
  });

  const messages = ['Te saluda Kapi!', 'Antes que inicies tu camino...'];
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
            src="/assets/characters/capito-default.png"
            className="mx-auto"
            width={150}
            height={150}
          />
          <br />
        </div>
        <div className="flex h-max w-full justify-between">
          <Button variant="secondary" onClick={goToPrevious}>
            Anterior
          </Button>
          <Button
            onClick={() => {
              setAnimate(true);
              setTimeout(() => {
                goToNext();
                setAnimate(false);
              }, 400);
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
