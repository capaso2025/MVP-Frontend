import { Typography } from '@/shared/ui';
import { useEffect, useRef } from 'react';

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollRef.current;

      // Obtener la posición del contenedor respecto al viewport
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular si el contenedor está en el viewport
      const isInViewport =
        containerRect.top <= 0 && containerRect.bottom >= windowHeight;

      if (isInViewport) {
        // Calcular el progreso del scroll dentro de la sección
        const scrollProgress =
          Math.abs(containerRect.top) / (container.offsetHeight - windowHeight);

        // Obtener el ancho total del contenido horizontal
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Calcular la nueva posición horizontal
        const newScrollLeft = Math.min(
          scrollProgress * maxScrollLeft,
          maxScrollLeft,
        );

        // Aplicar el scroll horizontal
        scrollContainer.scrollLeft = newScrollLeft;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh]" // Altura grande para permitir scroll vertical
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Typography variant="h1" className="mt-24 mb-4 text-center text-white">
          Todo lo que necesitas para evolucionar. <br />
          En un solo lugar
        </Typography>
        <div className="flex flex-1 items-center overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-full gap-10 overflow-x-hidden scroll-smooth pr-12 pl-12"
            style={{ scrollBehavior: 'auto' }}
          >
            {[
              {
                id: 1,
                title: 'Define. Planea. Cumple.',
                img: '/metas.png',
              },
              {
                id: 2,
                title: 'Construye lo que importa.',
                img: '/constructor.png',
              },
              {
                id: 3,
                title: 'Crecimiento con conciencia.',
                img: '/aprendizaje.png',
              },
              {
                id: 4,
                title: 'Enciende tu energía interna.',
                img: '/motivacion.png',
              },
            ].map((el) => (
              <div className="flex w-[700px] flex-shrink-0 flex-col items-center justify-center">
                <Typography
                  variant="h5"
                  className="mb-4 text-center font-normal"
                >
                  {el.title}
                </Typography>
                <img
                  key={el.id}
                  className="w-[500px] flex-shrink-0 rounded-2xl object-cover lg:w-[650px]"
                  src={el.img}
                  width={650}
                  height={650}
                  alt={`Screen example ${el.title}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
