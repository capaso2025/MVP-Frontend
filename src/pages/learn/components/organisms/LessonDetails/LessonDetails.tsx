import { Button, Typography } from '@/shared/ui';
import Spacer from '@/shared/ui/atoms/Spacer';

function LessonDetails(props: {
  level: { level: number; title: string };
  onClick: () => void;
}) {
  const { level, onClick } = props;
  if (!level) return <></>;
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
          <Typography variant="h2" className="font-normal">
            {level.title}
          </Typography>
          <Spacer size="md" />
          <Typography className="text-foreground font-normal" variant="h5">
            {`Nivel ${level.level}`}
          </Typography>
          <Spacer size="lg" />
          <Typography
            variant="h5"
            className="text-foreground-secondary font-normal"
          >
            Puntos de experiencia:{' '}
            <Typography
              as="span"
              variant="h5"
              className="text-foreground font-normal"
            >
              100 XP
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            className="text-foreground-secondary font-normal"
          >
            Nivel:{' '}
            <Typography
              as="span"
              variant="h5"
              className="text-foreground font-normal"
            >
              Principiante
            </Typography>
          </Typography>
        </div>
        <Button variant="landing" className="w-full" onClick={onClick}>
          Empezar ahora
        </Button>
      </div>
    </div>
  );
}

export default LessonDetails;
