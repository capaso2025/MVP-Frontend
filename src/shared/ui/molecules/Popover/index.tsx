import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';

function Popover(props: {
  trigger: () => React.ReactNode;
  content?: () => React.ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
  optionsList?: {
    label: string;
    icon?: string;
    onClick: () => void;
  }[];
}) {
  const {
    trigger,
    content,
    optionsList,
    triggerClassName = '',
    contentClassName = '',
  } = props;
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setContentVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`${triggerClassName}`}
        onClick={() => setContentVisible((contentVisible) => !contentVisible)}
      >
        {trigger()}
      </div>
      <div
        ref={contentRef}
        className={`absolute top-0 left-0 z-10 mt-7 w-max rounded-lg border border-gray-200 bg-white shadow-lg ${contentVisible ? 'block' : 'hidden'} ${contentClassName}`}
      >
        {content ? (
          <div className="p-4">{content()}</div>
        ) : (
          optionsList &&
          optionsList.length > 0 && (
            <div>
              {optionsList.map((option, index) => (
                <div
                  key={index}
                  onClick={option.onClick}
                  className="flex w-full items-center p-2 text-left text-sm hover:bg-gray-100"
                >
                  <Icon name="book" className="text-primary mr-2" />
                  {option.label}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Popover;
