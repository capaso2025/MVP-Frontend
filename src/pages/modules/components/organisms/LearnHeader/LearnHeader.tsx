import { Typography } from '@/shared/ui';
import { ArrowLeftIcon } from '@/shared/ui/atoms/Icon/Icon';
import { Link } from 'react-router-dom';

function LearnHeader(props: {
  backRoute: string;
  backRouteName: string;
  title: string;
}) {
  const { backRoute, title, backRouteName } = props;
  return (
    <div className="bg-primary-lighter rounded-2xl p-2 shadow-md">
      <Link className="flex items-center text-sm opacity-50" to={backRoute}>
        <ArrowLeftIcon className="scale-75" />
        Volver a {backRouteName}
      </Link>
      <Typography variant="h4" className="p-2">
        {title}
      </Typography>
    </div>
  );
}

export default LearnHeader;
