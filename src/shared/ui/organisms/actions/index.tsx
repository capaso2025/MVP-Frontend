import { Card } from '@/shared/ui/atoms/Card';
import { Typography } from '@/shared/ui';
import { useLocation } from '@tanstack/react-router';
import { useValidationLogin } from '@/shared/hooks/use-validation-login';

function Actions(props: {
  items: {
    icon: React.ElementType;
    text: string;
    onClick: () => void;
    route?: string;
  }[];
}) {
  const { items } = props;
  const location = useLocation();
  const { loginValidator } = useValidationLogin();

  return <Card className="grid w-full">
    <Typography className="text-primary mb-2 font-bold">
      Descubre
    </Typography>
    {items.map(({ icon: Icon, text, onClick, route }) => {
      const selected = route === location.pathname;
      return (
        <div
          key={text}
          className={`flex cursor-pointer gap-4 rounded-md p-2 transition-all duration-100 ${selected ? 'bg-primary text-white hover:bg-primary' : 'hover:bg-gray-200'
            }`}
          onClick={() => loginValidator(onClick)}
        >
          <Icon
            className={`text-primary ${selected ? 'text-white' : ''
              }`}
            size={20}
          />
          <Typography
            variant="body2"
            className={`text-primary ${selected ? 'text-white' : ''
              }`}
          >
            {text}
          </Typography>
        </div>
      )
    })}
  </Card>
};

export default Actions;