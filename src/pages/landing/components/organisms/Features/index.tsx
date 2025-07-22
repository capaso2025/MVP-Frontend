import { useFadeInOnScroll } from '@/shared/hooks/use-fade-in-scroll';
import { Button, Typography } from '@/shared/ui';
import { FEATURES } from './data';
export default function Features() {
  const { hasBeenVisible, ref } = useFadeInOnScroll();
  return (
    <section
      ref={ref}
      className={`transition-all duration-500 ${hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div className="px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography variant="h1" className="text-white">
              Funcionalidades
            </Typography>
            <Typography variant="h4" className="font-normal text-white">
              Descubre todas las herramientas que te ayudarán a alcanzar tu
              máximo potencial
            </Typography>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-300 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Typography variant="h6" className="text-primary">
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-foreground-secondary font-normal"
                    >
                      {feature.description}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <Typography variant="h5" className="font-normal text-white">
            ¿Listo para comenzar tu transformación?
          </Typography>
          <Button variant="landing">Empezar ahora</Button>
        </div>
      </div>
    </section>
  );
}
