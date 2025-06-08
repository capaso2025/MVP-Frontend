import { useBackNext } from '@/shared/hooks/useBackNext';
import { Button, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';

function Intro() {
  const navigate = useNavigate();
  const { resultMessages } = useOnboarding();
  const { currentIndex, goToNext } = useBackNext({
    length: 2,
    finishFn: () => {
      navigate('/sections');
    },
  });

  return (
    <OnboardingLayout>
      <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] py-4 xl:w-full">
        <div>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="/assets/characters/capito-happy.png"
              width={150}
              height={150}
            />
            {resultMessages[currentIndex]?.bubble && (
              <div className="border-secondary rounded-lg border p-4">
                <Typography>{resultMessages[currentIndex]?.bubble}</Typography>
              </div>
            )}
          </div>
        </div>
        <main>
          <div className="mx-auto grid h-full max-w-[50%] place-content-center gap-4">
            {resultMessages[currentIndex]?.mainText && (
              <div className="border-secondary-light h-max rounded-lg border p-4">
                <Typography>
                  {resultMessages[currentIndex]?.mainText}
                </Typography>
              </div>
            )}
          </div>
        </main>
        <div className="mt-8 flex items-center justify-between">
          <div />
          <Button onClick={goToNext}>
            {resultMessages[currentIndex]?.buttonText}
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Intro;
