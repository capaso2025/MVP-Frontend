import {
  CheckCircle,
  PuzzleIcon as PuzzlePiece,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';

interface ConceptProps {
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

function Concept({ icon, color, children }: ConceptProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 rounded-lg bg-gray-100 p-4 shadow-md`}
    >
      <div className={`mt-0.5 text-${color}-500`}>{icon}</div>
      <Typography variant="h5" className="font-normal">
        {children}
      </Typography>
    </div>
  );
}

export default function Resume(props: { finishCallback: () => void }) {
  const { finishCallback } = props;

  const handleFinishModule = () => {
    finishCallback();
  };

  return (
    <div className="grid h-[calc(100vh-200px)] grid-cols-2 gap-6">
      <div className="grid place-content-center">
        <img
          src="/assets/characters/capito-excited-2.png"
          className="mask-transparent-bottom"
          width={400}
          height={400}
        />
      </div>
      <div className="grid place-content-center">
        <div className="mx-auto max-w-lg">
          <div className="space-y-4 pt-6 pb-4">
            <Typography variant="h3" className="mb-4 text-center">
              Resumen del Módulo
            </Typography>
            <Concept icon={<CheckCircle className="h-5 w-5" />} color="green">
              Comunicar es más que hablar: implica enviar, recibir y entender un
              mensaje.
            </Concept>

            <Concept icon={<PuzzlePiece className="h-5 w-5" />} color="blue">
              Hay varios elementos que deben funcionar bien juntos.
            </Concept>

            <Concept
              icon={<AlertTriangle className="h-5 w-5" />}
              color="orange"
            >
              Si alguno falla, puede haber malentendidos.
            </Concept>
          </div>
          <div className="pt-2 pb-6">
            <Button
              onClick={handleFinishModule}
              variant="landing"
              className="w-full"
            >
              Finalizar Módulo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
