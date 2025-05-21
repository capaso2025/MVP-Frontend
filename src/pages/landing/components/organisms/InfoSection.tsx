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
  buttonText?: string;
  descriptionProps?: Partial<React.ComponentProps<typeof Typography>>;
}
const InfoSection = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLDivElement>>((props) => {
  const {
    image,
    imgPosition = 'right',
    description = '',
    color = '',
    title = '',
    withButton = false,
    buttonText = '',
    descriptionProps = {},
    ...rest
  } = props;
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  const { className: descriptionClassName, ...restDescriptionProps } = descriptionProps;
  console.log(rest)
  return (
    <div

      ref={ref}
      className={`flex flex-col items-start transition-all duration-500 justify-between gap-8 lg:gap-0 ${imgPosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
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
        {withButton && <div className={
          `mt-4 text-center ${imgPosition === 'left' ? 'lg:text-right' : 'lg:text-left'}`
        }><Button size="lg" variant='landing' className=''>{buttonText}</Button></div>}
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
