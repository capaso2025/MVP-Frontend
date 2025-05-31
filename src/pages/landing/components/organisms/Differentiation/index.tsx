import { Typography } from '@/shared/ui';
import { DIFFERENCES } from './data';
import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';

export default function DiferenciasSection() {
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  return (
    <section
      ref={ref}
      className={`relative z-1 transition-all duration-500 ${hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <Typography variant="h1" className="mb-16 text-center text-white">
        ¿Qué nos hace diferentes?
      </Typography>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[60%_auto]">
        <div className="mx-auto w-full space-y-8">
          {DIFFERENCES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group hover:border-primary-lighter/30 flex items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-[#12446e]/20 hover:shadow-2xl hover:shadow-[#12446e]/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="border-primary-lighter/20 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <Typography variant="h5" className="mb-2 text-white">
                    {item.titulo}
                  </Typography>
                  <Typography className="text-white/80">
                    {item.descripcion}
                  </Typography>
                </div>

                {/* Decorative element */}
                <div className="to-primary-lighter h-2 w-2 rounded-full bg-gradient-to-r from-[#12446e] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>
        <div className="grid place-content-center">
          <img
            src="/assets/characters/capito-excited.png"
            className="mask-transparent-bottom"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
