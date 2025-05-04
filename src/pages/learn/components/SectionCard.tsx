import { Button, Progress, Typography } from '@/shared/ui';
import { Link } from 'react-router-dom';
import SpeechBubble from './SpeechBubble';

function SectionCard(props: {
  title: string;
  bubbleText: string;
  progress: number;
  onClick: () => void;
  detailsRoute: string;
  isActive?: boolean;
}) {
  const {
    title,
    bubbleText,
    progress,
    onClick,
    detailsRoute,
    isActive = false,
  } = props;
  return (
    <div
      className={`grid h-max grid-cols-2 gap-8 rounded-xl p-6 ${isActive ? 'bg-primary-lighter' : 'bg-gray-100'}`}
    >
      <div className="grid grid-rows-[auto_max-content]">
        <div>
          <Link className="text-primary text-sm" to={detailsRoute}>
            Ver detalles
          </Link>
          <Typography variant="h4" className="mt-4 mb-4 font-bold">
            {title}
          </Typography>
          <Progress value={progress} />
        </div>
        <Button
          onClick={isActive ? onClick : () => {}}
          variant={isActive ? 'primary' : 'outline'}
          disabled={!isActive}
        >
          {isActive ? 'Continuar' : 'Bloqueado'}
        </Button>
      </div>
      <div className="grid grid-rows-[50px_auto] place-content-center gap-2">
        <SpeechBubble text={bubbleText} />
        <img
          src="/src/assets/wolf.png"
          className="mx-auto text-center"
          alt="capo logo"
          width={150}
        />
      </div>
    </div>
  );
}

export default SectionCard;
