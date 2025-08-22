import { Button, Typography } from '@/shared/ui';
import { SECTIONS_TEXTS } from '../../constants/sections-texts';
import Spacer from '@/shared/ui/atoms/Spacer';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';

function AboutUs() {
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  return (
    <section
      ref={ref}
      id="nosotros"
      className={`transition-all duration-500 ${hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div className="grid place-content-center items-center gap-8 md:grid-cols-[30%_auto]">
        <div className="grid place-content-center">
          <img
            src="/assets/characters/capito-ladders.png"
            width={400}
            alt=""
            className="hidden md:block"
          />
        </div>
        <div className="grid h-full grid-rows-[auto_max-content] gap-4 pr-8 pb-8 text-right">
          <div>
            <Typography variant="h2" className="text-primary">
              {SECTIONS_TEXTS.NOSOTROS_2.TITLE}
            </Typography>
            <Typography variant="h5" className="text-primary mt-4 font-normal">
              {SECTIONS_TEXTS.NOSOTROS_2.DESCRIPTION}
            </Typography>
          </div>
          <div className="flex justify-end">
            <Button variant="landing">
              <Typography className="text-white">Conocer mas</Typography>{' '}
              <SquareArrowOutUpRightIcon color="white" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <Spacer size="3xl" />
      <div className="grid items-center gap-8 md:grid-cols-[auto_30%]">
        <div className="grid h-[80%] grid-rows-[auto_max-content] gap-4 pb-8 pl-8 text-left">
          <div>
            <Typography variant="h2" className="text-primary">
              {SECTIONS_TEXTS.NOSOTROS.TITLE}
            </Typography>
            <Typography variant="h5" className="text-primary mt-4 font-normal">
              {SECTIONS_TEXTS.NOSOTROS.DESCRIPTION}
            </Typography>
          </div>
          <div className="flex justify-start">
            <Button variant="landing">
              <Typography className="text-white">Conocer mas</Typography>{' '}
              <SquareArrowOutUpRightIcon color="white" className="ml-2" />
            </Button>
          </div>
        </div>
        <img
          src="/assets/characters/capo-university2.png"
          alt=""
          className="hidden justify-self-end md:block"
          width={280}
          height={350}
        />
      </div>
    </section>
  );
}

export default AboutUs;
