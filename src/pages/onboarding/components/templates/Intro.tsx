import { useBackNext } from "@/shared/hooks/useBackNext";
import { Button } from "@/shared/ui";
import SpeechBubble from "@/shared/ui/atoms/speech-bubble/SpeechBubble";
import { OnboardingLayout } from "@/shared/ui/layouts/OnboardingLayout/OnboardingLayout";
import { useNavigate } from "react-router-dom";

function OnboardingIntro() {
  const navigate = useNavigate();
  const { currentIndex, goToNext, goToPrevious, } = useBackNext({
    length: 3,
    finishFn: () => {
      navigate("/onboarding/questions");
    },
  });

  const messages = [
    "Hola soy Capito!",
    "Antes que inicies tu camino...",
    "Recuerda, tu voz tiene poder. Y cuando aprendes a usarla con seguridad, puedes abrirte a nuevas oportunidades, crear relaciones auténticas y liderar con confianza. ¡Vamos a desarrollar esa versión fuerte y clara de ti!"]
  return <OnboardingLayout>
    <div className="w-[90%] xl:w-full max-w-7xl mx-auto h-[calc(100vh-132px)] grid grid-rows-[auto_max-content] py-4">
      <div className="grid place-content-center">
        <SpeechBubble text={messages[currentIndex] || ""} backgroundColor="bg-primary-lighter" className="scale-150 mb-4 max-w-[300px]" />
        <br />
        <img src="/assets/characters/capito-happy.png" className="mx-auto" width={150} height={150} />
        <br />
      </div>
      <div className="flex justify-between w-full h-max">
        <Button size="lg" variant="secondary" onClick={goToPrevious}>Anterior</Button>
        <Button size="lg" onClick={goToNext}>Avanzar</Button>
      </div>
    </div>
  </OnboardingLayout>
};

export default OnboardingIntro;