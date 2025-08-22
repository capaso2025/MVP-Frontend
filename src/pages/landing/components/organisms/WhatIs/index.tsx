import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';
import { Typography } from '@/shared/ui';

export default function WhatIs() {
  const { hasBeenVisible, ref } = useFadeInOnScroll(0.6);
  return (
    <section
      ref={ref}
      className={
        'grid grid-cols-1 place-content-center gap-8 transition-all duration-500 md:grid-cols-2'
      }
    >
      <div
        className={`grid place-content-center transition-all duration-500 ${hasBeenVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      >
        <Typography variant="h2" className="text-left font-normal!">
          <strong className="text-primary-2">Capaso</strong> es tu guía digital
          para dejar de procrastinar y construir la vida que quieres.
        </Typography>
      </div>
      <img
        src="/assets/characters/capito-excited-2.png"
        alt="Capaso"
        className={`mx-auto w-[90%] transition-all duration-500 md:w-[80%] ${hasBeenVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        style={{ justifySelf: 'end' }}
      />
    </section>
  );
}
