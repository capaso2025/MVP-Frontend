import { Button, Progress, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/OnboardingLayout/OnboardingLayout';
import { useBackNext } from '@/shared/hooks/useBackNext';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';
import { useEffect, useState } from 'react';
import { ResponseQuestion } from '../../store/onboarding-store';

function Questions() {
  const navigate = useNavigate();
  const { questions } = useOnboarding();
  const { currentIndex, goToNext, goToPrevious } = useBackNext({
    length: questions.length,
    finishFn: () => {
      navigate('/onboarding/results');
    },
  });
  const { responses, setResponsesByQuestion } = useOnboarding();
  const [currentData, setCurrentData] = useState<{
    question: string;
    options: {
      id: string;
      text: string;
    }[];
  } | undefined>(undefined);
  const [currentQuestion, setCurrentQuestion] = useState<ResponseQuestion | undefined>(undefined);

  const handleNext = () => {
    if (responses.find((resp) => resp.title === currentData?.question)) {
      goToNext();
    }
  }
  const calculatedProgress = Math.round(
    ((currentIndex + 1) / questions.length) * 100,
  );

  useEffect(() => {
    const data = questions[currentIndex];
    setCurrentData(data);
  }, [currentIndex, questions])

  useEffect(() => {
    const currentQuestion = responses.find((resp) => resp.title === currentData?.question)
    if (currentQuestion) {
      setCurrentQuestion(currentQuestion);
    } else {
      setCurrentQuestion(undefined);
    }
  }, [responses, currentData])

  return (
    <OnboardingLayout>
      <div className="mx-auto grid h-[calc(100vh-132px)] w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] py-4 xl:w-full">
        <div>
          <Progress value={calculatedProgress} size="lg" />
          <div className="mt-8 flex items-center gap-4">
            <img
              src="/assets/characters/capito-default.png"
              width={150}
              height={150}
            />
            <div className="border-secondary rounded-lg border p-4">
              <Typography>{currentData?.question}</Typography>
            </div>
          </div>
        </div>
        <main>
          <div className="mx-auto grid h-full max-w-[80%] grid-cols-1 place-content-center gap-4 md:grid-cols-2">
            {currentData?.options?.map((opt) => (
              <div className={`h-max rounded-lg border p-4 cursor-pointer transition-all duration-200 ${currentQuestion?.title === currentData?.question && currentQuestion?.response.id === opt.id ? 'border-transparent bg-primary-lighter shadow-md' : 'border-primary-lighter '}`}
                onClick={() => setResponsesByQuestion({
                  title: currentData?.question,
                  response: {
                    id: opt.id,
                    value: opt.text,
                  },
                })}
              >
                <Typography>{opt.text}</Typography>
              </div>
            ))}
          </div>
        </main>
        <div className="mt-8 flex items-center justify-between">
          <Button variant="secondary" size="lg" onClick={goToPrevious}>
            Regresar
          </Button>
          <Button size="lg" onClick={handleNext}>
            Avanzar
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Questions;
