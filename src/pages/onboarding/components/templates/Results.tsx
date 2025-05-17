import { useBackNext } from "@/shared/hooks/useBackNext";
import { Button, Typography } from "@/shared/ui";
import { OnboardingLayout } from "@/shared/ui/layouts/OnboardingLayout/OnboardingLayout";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../hooks/use-onboarding";

function Intro() {
  const navigate = useNavigate();
  const { resultMessages } = useOnboarding();
  const { currentIndex, goToNext } = useBackNext({
    length: 2,
    finishFn: () => {
      navigate("/sections");
    },
  });



  return <OnboardingLayout>
    <div className="w-[90%] xl:w-full max-w-7xl mx-auto h-[calc(100vh-132px)] grid grid-rows-[max-content_auto_max-content] py-4">
      <div>
        <div className="flex items-center gap-4 mt-8">
          <img src="/assets/characters/capito-happy.png" width={150} height={150} />
          {resultMessages[currentIndex]?.bubble && <div className="border border-secondary rounded-lg p-4">
            <Typography>{resultMessages[currentIndex]?.bubble}</Typography>
          </div>}
        </div>
      </div>
      <main>
        <div className="grid place-content-center gap-4 max-w-[50%] mx-auto h-full">
          {resultMessages[currentIndex]?.mainText && <div className="border border-secondary-light h-max rounded-lg p-4">
            <Typography>{resultMessages[currentIndex]?.mainText}</Typography>
          </div>}
        </div>
      </main>
      <div className="flex justify-between items-center mt-8">
        <div />
        <Button size="lg" onClick={goToNext}>{resultMessages[currentIndex]?.buttonText}</Button>
      </div>
    </div>
  </OnboardingLayout>
};

export default Intro;