import { Button, Typography } from '@/shared/ui';
import { forwardRef, HTMLAttributes } from 'react';
const Demo = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props) => {
    const { id } = props;
    return (
      <section
        id={id}
        className="grid grid-cols-1 gap-8 lg:grid-cols-[30%_auto]"
      >
        <div className="hidden place-content-center lg:grid">
          <img
            src="/assets/characters/capito-excited.png"
            className="mask-transparent-bottom"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Typography variant="h1" className="text-center text-white">
            ¿Eres un colegio o universidad?
          </Typography>
          <Typography
            variant="h4"
            className="text-foreground-secondary text-center font-normal"
          >
            Capo ayuda a colegios y universidades a potenciar a sus estudiantes.
            Solicita una demo para tu institución.
          </Typography>
          <Button variant="landing" className="mx-auto mt-4 w-fit">
            Quiero una demo para mi institución
          </Button>
        </div>
      </section>
    );
  },
);

export default Demo;
