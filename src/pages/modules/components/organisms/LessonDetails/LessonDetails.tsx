import { useDummyStore } from '@/shared/store/dummy-store';
import { Button, Typography } from '@/shared/ui';
import Spacer from '@/shared/ui/atoms/Spacer';

function LessonDetails(props: {
  lesson: { level: number; title: string };
  onClick: () => void;
}) {
  const { lesson, onClick } = props;
  const currentLesson = useDummyStore((state) => state.currentLesson);
  if (!lesson) return <></>;
  return (
    <div className="grid grid-cols-2 place-content-center gap-4 p-4 text-white">
      <div className="grid place-content-center">
        <img
          src="/assets/characters/capito-default.png"
          className="mask-transparent-bottom"
          alt="capo"
          width={280}
        />
      </div>
      <div className="grid grid-rows-[auto_max-content] gap-8">
        <div>
          <Typography variant="h3" className="text-primary font-normal">
            {lesson.title}
          </Typography>
          <Spacer size="lg" />
          <Typography
            variant="h5"
            className="text-foreground-secondary/50 font-normal"
          >
            Puntos de experiencia:{' '}
            <Typography
              as="span"
              variant="h5"
              className="text-primary font-normal"
            >
              100 XP
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            className="text-foreground-secondary/50 font-normal"
          >
            Nivel:{' '}
            <Typography
              as="span"
              variant="h5"
              className="text-primary font-normal"
            >
              Principiante
            </Typography>
          </Typography>
        </div>
        <Button variant="landing" className="w-full" onClick={onClick}>
          {currentLesson > lesson.level ? 'Repetir' : 'Empezar ahora'}
        </Button>
      </div>
    </div>
  );
}

export default LessonDetails;
