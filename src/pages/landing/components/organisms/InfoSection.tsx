import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';
import { Typography } from '@/shared/ui';
import Spacer from '@/shared/ui/atoms/Spacer';
import { forwardRef } from 'react';

interface Props {
  image?: string;
  imgPosition?: 'left' | 'right';
  title?: string;
  description?: string;
  color?: string;
}
const InfoSection = forwardRef<HTMLDivElement, Props>((props) => {
  const {
    image,
    imgPosition = 'right',
    description = '',
    color = '',
    title = '',
  } = props;
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  console.log("🏝️ ~ hasBeenVisible:", hasBeenVisible)
  return (
    <div
      ref={ref}
      className={`flex flex-col items-start transition-all duration-500 justify-between gap-8 lg:gap-0 ${imgPosition === 'left' ? 'lg:flex-row-reverse' : 'flex-row'} ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }
      
      `}
    >
      <div className="max-w-[50%]">
        <Typography
          variant="h2"
          className={`${color || 'text-primary-light'} ${imgPosition === 'left' ? 'text-right' : 'text-left'}`}
        >
          {title}
        </Typography>
        <Spacer size="lg" />
        <Typography
          variant="h4"
          className={`${color || 'text-primary-light'} ${imgPosition === 'left' ? 'text-right' : 'text-left'}`}
        >
          {description}
        </Typography>
      </div>
      <img
        src={image}
        className={imgPosition === 'left' ? 'mr-auto ml-0' : 'mr-0 ml-auto'}
        width={400}
      />
    </div>
  );
});

export default InfoSection;
