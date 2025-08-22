import { Card } from '@/shared/ui/atoms/Card';
import { Typography } from '@/shared/ui';

function Actions(props: {
  items: {
    icon: React.ElementType;
    text: string;
    onClick?: () => void;
  }[];
}) {
  const { items } = props;

  return <Card className="grid w-full">
    <Typography className="text-primary mb-2 font-bold">
      Descubre
    </Typography>
    {items.map(({ icon: Icon, text, onClick }) => (
      <div
        key={text}
        className="hover:bg-primary group flex cursor-pointer gap-4 rounded-md p-2 transition-all duration-100"
        onClick={onClick}
      >
        <Icon
          className="text-primary group-hover:text-white"
          size={20}
        />
        <Typography
          variant="body2"
          className="text-primary group-hover:text-white"
        >
          {text}
        </Typography>
      </div>
    ))}
  </Card>
};

export default Actions;