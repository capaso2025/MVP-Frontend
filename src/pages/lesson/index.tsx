import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import { XIcon } from '@/shared/ui/atoms/Icon/Icon';
import logo from '@/assets/capo-logo-dark.png';
import { useState } from 'react';
import FlashCards from '@/shared/ui/templates/flash-cards';
import { useDummyStore } from '@/shared/store/dummy-store';
import Quiz from '@/shared/ui/templates/quiz';
import SortingGame from '@/shared/ui/templates/sorting-game';
import { useLesson } from './hooks/use-lesson';
import Resume from '@/shared/ui/templates/resume-module';
function Lesson() {
  const [showFinishButton, setShowFinishButton] = useState(false);

  const nextLesson = useDummyStore((state) => state.nextLesson);
  const {
    isRepeatedLesson,
    returnToModule,
    handleNextLesson,
    currentLessonByParams,
  } = useLesson();
  const setAlertDialogData = useRenderStore(
    (state) => state.setAlertDialogData,
  );

  const activityByCurrentLesson = {
    FLASH_CARDS: (
      <FlashCards
        finishCallback={() => {
          setShowFinishButton(true);
        }}
      />
    ),
    SORTING_GAME: (
      <SortingGame
        finishCallback={() => {
          setShowFinishButton(true);
        }}
      />
    ),
    QUIZ: (
      <Quiz
        finishCallback={() => {
          setShowFinishButton(true);
        }}
      />
    ),
    RESUME: (
      <Resume
        finishCallback={() => {
          returnToModule();
        }}
      />
    ),
  };
  const onCloseLesson = () => {
    setAlertDialogData({
      show: true,
      description:
        '¿Estás seguro que deseas abandonar la lección?. Perderás tu progreso hasta ahora.',
      confirmText: 'Sí, salir',
      onConfirm: () => {
        returnToModule();
      },
    });
  };

  const handleNext = () => {
    if (isRepeatedLesson) return returnToModule();
    // next lesson
    handleNextLesson();
    nextLesson();
  };

  return (
    <div className="mx-auto grid w-[100%] max-w-[1200px] grid-rows-[max-content_auto_max-content] gap-8 p-8 lg:w-4/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} width={50} />
          <div>
            <Typography variant="body2" className="text-foreground-secondary">
              Estas dentro de la habilidad
            </Typography>
            <Typography variant="h4">Comunicación efectiva</Typography>
          </div>
        </div>
        <XIcon onClick={onCloseLesson} />
      </div>
      {(currentLessonByParams?.['activity'] &&
        activityByCurrentLesson[
          currentLessonByParams?.[
            'activity'
          ] as keyof typeof activityByCurrentLesson
        ]) || <></>}
      <div className="flex items-center justify-between">
        <div />
        {showFinishButton ? (
          <Button onClick={handleNext}>
            {isRepeatedLesson ? 'Terminar' : 'Siguiente lección'}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Lesson;
