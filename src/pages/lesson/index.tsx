import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { useLesson } from './hooks/use-lesson';
import { getSectionNameByModuleName } from '@/shared/lib/utils';
import { XIcon } from '@/shared/ui/atoms/Icon/Icon';

function Lesson() {
  const navigate = useNavigate();
  const params = useParams();
  const { currentAndNextLesson, handleBackLesson, handleNextLesson } =
    useLesson({
      lesson: params.lesson as string,
      module: params.module as string,
    });
  const setAlertDialogData = useRenderStore(
    (state) => state.setAlertDialogData,
  );
  const onCloseLesson = () => {
    setAlertDialogData({
      show: true,
      description:
        '¿Estás seguro que deseas abandonar la lección?. Perderás tu progreso hasta ahora.',
      confirmText: 'Sí, salir',
      onConfirm: () => {
        navigate(
          `/modules/${encodeURIComponent(getSectionNameByModuleName(params.module || ''))}`,
        );
      },
    });
  };
  const handleFinishModule = () => {
    setAlertDialogData({
      show: true,
      description:
        'Finalizaste exitosamente el módulo. No olvides poner en práctica lo aprendido.',
      confirmText: 'Ir al siguiente módulo',
      onCancel: () => {
        navigate(
          `/modules/${encodeURIComponent(getSectionNameByModuleName(params.module || ''))}`,
        );
      },
      onConfirm: () => {
        // TODO: navigate to next module
      },
    });
  };

  return (
    <div className="h-full">
      <div className="mx-auto grid h-screen w-4/5 max-w-[1200px] grid-rows-[max-content_auto_max-content] gap-8 p-8">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body2" className="text-foreground-secondary">
              Estas dentro de la habilidad
            </Typography>
            <Typography variant="h2">Comunicación efectiva</Typography>
          </div>
          <XIcon onClick={onCloseLesson} />
        </div>
        <div className="grid grid-cols-2 place-content-center gap-4 p-4">
          <div>
            <img
              src="/assets/characters/capito-default.png"
              className="mx-auto"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Typography variant="h3">
              Bienvenido a la lección{' '}
              {currentAndNextLesson.currentLesson?.level}
            </Typography>
            <br />
            <Typography variant="h4">
              {currentAndNextLesson.currentLesson?.title}
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {currentAndNextLesson.currentLesson?.level === 1 ? (
            <div />
          ) : (
            <Button size="lg" onClick={handleBackLesson}>
              Retroceder
            </Button>
          )}
          <Button
            size="lg"
            onClick={
              currentAndNextLesson.nextLesson
                ? handleNextLesson
                : handleFinishModule
            }
          >
            {currentAndNextLesson.nextLesson ? 'Continuar' : 'Finalizar'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
