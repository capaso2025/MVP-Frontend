import { ChevronDownIcon, HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Breadcrumbs(props: {
  links: {
    text: string;
    href: string;
  }[];
  className?: string;
}) {
  const { links, className = '' } = props;
  return (
    <div className={`flex items-center ${className}`}>
      <HomeIcon className="text-t-secondary mr-2 mb-1" />
      {links.map((link, index) => {
        const isTheLast = index === links.length - 1;
        return (
          <div key={index} className="text-sm">
            {isTheLast ? (
              <span className="font-semibold">{link.text}</span>
            ) : (
              <Link
                className="text-t-secondary flex items-center"
                to={link.href}
              >
                <span>{link.text}</span>
                <ChevronDownIcon className="text-t-secondary scale-75 -rotate-90" />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
