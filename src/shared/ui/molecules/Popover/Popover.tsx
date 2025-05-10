import { Icon } from '../../atoms/Icon/Icon';
import styles from './popover.module.css';

function Popover(props: {
  trigger: () => React.ReactNode;
  content?: () => React.ReactNode;
  triggerClassName?: string;
  optionsList?: {
    label: string;
    icon?: string;
    onClick: () => void;
  }[];
}) {
  const { trigger, content, optionsList, triggerClassName = '' } = props;
  return (
    <div className="relative">
      <div className={`${styles['popover-trigger']} ${triggerClassName}`}>
        {trigger()}
      </div>
      <div
        className={`absolute top-0 left-0 z-10 mt-7 hidden w-max max-w-52 rounded-lg border border-gray-200 bg-white shadow-lg ${styles['popover-content']}`}
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
