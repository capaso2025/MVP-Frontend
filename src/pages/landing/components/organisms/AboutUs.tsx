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
      className={`transition-all duration-500 ${hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div className="bg-landing-dark grid h-[350px] grid-cols-[30%_auto] items-center gap-8 overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/assets/characters/capito-university.png"
          width={400}
          alt=""
          className="mask-transparent-right"
        />
        <div className="grid h-[80%] grid-rows-[auto_max-content] gap-4 pr-8 text-right">
          <div>
            <Typography variant="h2" className="text-white">
              {SECTIONS_TEXTS.NOSOTROS.TITLE}
            </Typography>
            <Typography
              variant="h5"
              className="text-foreground-secondary mt-4 font-normal"
            >
              {SECTIONS_TEXTS.NOSOTROS.DESCRIPTION}
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
      <Spacer size="xl" />
      <div className="grid h-[350px] grid-cols-[auto_30%] items-center gap-8 overflow-hidden rounded-2xl">
        <div className="grid h-[80%] grid-rows-[auto_max-content] gap-4 pl-8 text-left">
          <div>
            <Typography variant="h2" className="text-primary">
              {SECTIONS_TEXTS.NOSOTROS_2.TITLE}
            </Typography>
            <Typography variant="h5" className="text-primary mt-4 font-normal">
              {SECTIONS_TEXTS.NOSOTROS_2.DESCRIPTION}
            </Typography>
          </div>
          <div className="flex justify-start">
            <Button variant="landing">
              <Typography className="text-white">Conocer mas</Typography>{' '}
              <SquareArrowOutUpRightIcon color="white" className="ml-2" />
            </Button>
          </div>
        </div>
        <img src="/assets/characters/capito-ladders.png" alt="" width={400} />
      </div>
    </section>
  );
}

export default AboutUs;
