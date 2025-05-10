import { Typography } from '@/shared/ui';

export default function SpeechBubble(props: { text: string }) {
  const { text } = props;
  return (
    <div className="bg-background relative flex h-max items-center rounded-lg px-4 py-2">
      <Typography
        bold
        color="black"
        className="h-[43px] overflow-hidden text-xs text-ellipsis md:h-max"
      >
        {text}
      </Typography>
      <div className="bg-background absolute -bottom-2 left-12 h-4 w-4 rotate-45 transform"></div>
    </div>
  );
}
