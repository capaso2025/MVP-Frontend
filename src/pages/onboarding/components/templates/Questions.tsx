import { Button, Progress, Typography } from '@/shared/ui';
import { OnboardingLayout } from '@/shared/ui/layouts/onboarding-layout';
import { useBackNext } from '@/shared/hooks/useBackNext';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../hooks/use-onboarding';
import { useEffect, useState } from 'react';
import { ResponseQuestion } from '../../store/onboarding-store';

function Questions() {
  const navigate = useNavigate();
  const { questions, category, responses, setResponsesByQuestion } =
    useOnboarding();
  const { currentIndex, goToNext, goToPrevious } = useBackNext({
    length: questions.length,
    finishFn: () => {
      navigate('/onboarding/results');
    },
    previousFn: () => {
      navigate('/onboarding');
    },
  });
  const [currentQuestion, setCurrentQuestion] = useState<
    ResponseQuestion | undefined
  >(undefined);

  const handleNext = () => {
    if (
      responses.find((resp) => resp.title === questions[currentIndex]?.question)
    ) {
      goToNext();
    }
  };
  const calculatedProgress = Math.round(
    ((currentIndex + 1) / questions.length) * 100,
  );

  useEffect(() => {
    const currentQuestion = responses.find(
      (resp) => resp.title === questions[currentIndex]?.question,
    );
    if (currentQuestion) {
      setCurrentQuestion(currentQuestion);
    } else {
      setCurrentQuestion(undefined);
    }
  }, [responses]);

  useEffect(() => {
    if (!category) {
      navigate('/onboarding/category');
    }
  }, [category]);

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
              <Typography>{questions[currentIndex]?.question}</Typography>
            </div>
          </div>
        </div>
        <main>
          <div className="mx-auto grid h-full max-w-[80%] grid-cols-1 place-content-center gap-4 md:grid-cols-2">
            {questions[currentIndex]?.alternatives.map((opt) => (
              <div
                key={opt.text}
                className={`flex h-max cursor-pointer items-center gap-2 rounded-lg border p-4 transition-all duration-200 ${currentQuestion?.title === questions[currentIndex]?.question && currentQuestion?.response.id === opt.score.toString() ? 'bg-primary-lighter border-transparent shadow-md' : 'border-primary-lighter'}`}
                onClick={() =>
                  setResponsesByQuestion({
                    title: questions[currentIndex]?.question || '',
                    response: {
                      id: opt.score.toString(),
                      value: opt.score.toString(),
                    },
                  })
                }
              >
                <Typography>{opt.text}</Typography>
              </div>
            ))}
          </div>
        </main>
        <div className="mt-8 flex items-center justify-between">
          <Button variant="secondary" onClick={goToPrevious}>
            Regresar
          </Button>
          <Button onClick={handleNext}>Avanzar</Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Questions;
