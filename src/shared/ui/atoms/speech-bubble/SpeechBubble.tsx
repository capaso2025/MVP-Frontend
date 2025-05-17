import { cn } from '@/shared/lib/utils';
import { Typography } from '@/shared/ui';

export default function SpeechBubble(props: { text: string, className?: string, backgroundColor?: string }) {
  const { text, className, backgroundColor = "" } = props;
  return (
    <div className={cn("bg-background relative flex h-max items-center rounded-lg px-4 py-2", className, backgroundColor)}>
      <Typography
        className="h-[43px] overflow-hidden text-xs text-ellipsis md:h-max font-bold"
      >
        {text}
      </Typography>
      <div className={cn("bg-background absolute -bottom-2 left-12 h-4 w-4 rotate-45 transform", backgroundColor)}></div>
    </div>
  );
}
