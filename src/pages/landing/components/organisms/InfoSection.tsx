import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';
import { Button, Typography } from '@/shared/ui';
import Spacer from '@/shared/ui/atoms/Spacer';
import { forwardRef, HTMLAttributes } from 'react';

interface Props {
  image?: string;
  imgPosition?: 'left' | 'right';
  title?: string;
  description?: string;
  color?: string;
  withButton?: boolean;
  descriptionProps?: Partial<React.ComponentProps<typeof Typography>>;
  buttonProps?: Partial<React.ComponentProps<typeof Button>>;
  list?: string[];
}
const InfoSection = forwardRef<
  HTMLDivElement,
  Props & HTMLAttributes<HTMLDivElement>
>((props) => {
  const {
    image,
    imgPosition = 'right',
    description = '',
    color = '',
    title = '',
    withButton = false,
    descriptionProps = {},
    buttonProps = {},
    list = [],
    ...rest
  } = props;
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  const { className: descriptionClassName, ...restDescriptionProps } =
    descriptionProps;
  return (
    <div
      ref={ref}
      className={`flex flex-col items-start justify-between gap-8 transition-all duration-500 lg:gap-0 ${imgPosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
      {...rest}
    >
      <div className="lg:max-w-[50%]">
        <Typography
          variant="h2"
          className={`${color || 'text-primary-light'} text-center ${imgPosition === 'left' ? 'lg:text-right' : 'lg:text-left'}`}
        >
          {title}
        </Typography>
        <Spacer size="lg" />
        <Typography
          variant="h4"
          className={`${color || 'text-primary-light'} text-center ${imgPosition === 'left' ? 'lg:text-right' : 'lg:text-left'} ${descriptionClassName}`}
          {...restDescriptionProps}
        >
          {description}
        </Typography>
        {list.length > 0 && (
          <ul
            className={`${imgPosition === 'left' ? 'lg:text-right' : 'lg:text-left'} ${color || 'text-primary-light'} mt-4 mb-8`}
          >
            {list.map((item, index) => (
              <Typography
                variant="h6"
                as="li"
                key={index}
                className="py-2 font-normal"
              >
                {item}
              </Typography>
            ))}
          </ul>
        )}
        {withButton && (
          <div
            className={`mt-4 text-center ${imgPosition === 'left' ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <Button size="lg" variant="landing" {...buttonProps} />
          </div>
        )}
      </div>
      <img
        src={image}
        className={`mx-auto w-[200px] lg:w-[400px] ${imgPosition === 'left' ? 'lg:mr-auto lg:ml-0' : 'lg:mr-0 lg:ml-auto'}`}
        width={400}
      />
    </div>
  );
});

export default InfoSection;
