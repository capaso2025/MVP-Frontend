import { Button, Progress, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useBackNext } from '@/shared/hooks/useBackNext';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';
import { useEffect, useState } from 'react';
import { ResponseQuestion } from '../../store/onboarding-store';
import { useOnboardingTransitions } from '../../hooks/use-onboarding-transitions';

function Questions() {
  const navigate = useNavigate();
  const { questions, responses, setResponsesByQuestion } = useOnboarding();
  const { currentIndex, goToNext, goToPrevious, isFirstStep } = useBackNext({
    length: questions.length,
    finishFn: () => {
      navigate('/onboarding/results');
    },
    previousFn: () => {
      navigate('/onboarding');
    },
  });
  const { isAnimating, questionKey, direction, handleNext, handlePrevious } = useOnboardingTransitions({
    currentIndex,
    goToNext,
    goToPrevious,
  });
  const [currentQuestion, setCurrentQuestion] = useState<
    ResponseQuestion | undefined
  >(undefined);

  const calculatedProgress = Math.round(
    ((currentIndex + 1) / questions.length) * 100,
  );

  useEffect(() => {
    const currentQuestion = responses.find(
      (resp) => resp.id === questions[currentIndex]?.id,
    );
    if (currentQuestion) {
      setCurrentQuestion(currentQuestion);
    } else {
      setCurrentQuestion(undefined);
    }
  }, [responses, currentIndex, questions]);


  return (
    <OnboardingLayout title="Capaso">
      <div className="mx-auto grid h-full w-[90%] max-w-7xl grid-rows-[max-content_auto_max-content] overflow-x-hidden py-4 xl:w-full">
        <Progress value={calculatedProgress} size="sm" />
        <div className="mt-8 grid place-content-center">
          <div
            key={questionKey}
            className={`transition-all duration-200 ${isAnimating
              ? direction === 'forward'
                ? 'animate-slide-out-left'
                : 'animate-slide-out-right'
              : direction === 'forward'
                ? 'animate-slide-in-right'
                : 'animate-slide-in-left'
              }`}
          >
            <Typography variant="h5" className="font-normal">
              {questions[currentIndex]?.question}
            </Typography>
          </div>
        </div>
        <div>
          <div
            key={`alternatives-${questionKey}`}
            className={`mx-auto grid h-full max-w-[90%] grid-cols-1 place-content-center gap-4 transition-all duration-200 lg:max-w-[50%] ${isAnimating
              ? direction === 'forward'
                ? 'animate-slide-out-left'
                : 'animate-slide-out-right'
              : direction === 'forward'
                ? 'animate-slide-in-right'
                : 'animate-slide-in-left'
              }`}
          >
            {questions[currentIndex]?.alternatives.map((opt) => (
              <div
                key={opt.text}
                className={`flex h-max cursor-pointer items-center gap-2 rounded-2xl border border-white/20 p-4 transition-all duration-200 ${currentQuestion?.id === questions[currentIndex]?.id && currentQuestion?.response.value === opt.value.toString() ? 'from-primary-light to-primary-dark bg-gradient-to-br shadow-md' : ''}`}
                onClick={() =>
                  setResponsesByQuestion({
                    id: questions[currentIndex]?.id || '',
                    response: {
                      value: opt.value.toString(),
                    },
                  })
                }
              >
                <Typography>{opt.text}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between px-4">
          {!isFirstStep ? (
            <Button variant="secondary" onClick={handlePrevious}>
              Regresar
            </Button>
          ) : (
            <div />
          )}
          <Button
            onClick={handleNext}
            variant="landing"
            disabled={
              responses.find((resp) => resp.id === questions[currentIndex]?.id)
                ?.response.value === undefined
            }
          >
            Avanzar
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Questions;
