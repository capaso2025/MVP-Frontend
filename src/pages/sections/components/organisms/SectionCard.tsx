import { Button, Progress, Typography } from '@/shared/ui';

function SectionCard(props: {
  title: string;
  bubbleText: string;
  progress: number;
  onClick: () => void;
  isActive?: boolean;
  image?: string;
}) {
  const { title, progress, onClick, isActive = false, image } = props;
  return (
    <div
      className={`relative grid h-[250px] grid-cols-2 gap-8 overflow-hidden rounded-xl p-6 text-white ${isActive ? 'bg-primary-lighter' : 'bg-gray-100'}`}
    >
      <div className="z-10 grid grid-rows-[auto_max-content]">
        <div>
          <Typography variant="h6" className="font-normal text-white">
            Ver detalles
          </Typography>
          <Typography variant="h4" className="mb-4 font-bold">
            {title}
          </Typography>
          <Progress value={progress} />
        </div>
        <Button
          onClick={isActive ? onClick : () => {}}
          variant={'secondary'}
          disabled={!isActive}
        >
          {isActive ? 'Continuar' : 'Bloqueado'}
        </Button>
      </div>
      <div className="mask-opacity-image absolute top-0 right-0 z-0 h-full w-full">
        {/* <SpeechBubble text={bubbleText} /> */}
        <img
          src={image}
          className="mr-0 ml-auto h-full w-full object-cover text-center"
          alt="capo logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default SectionCard;
