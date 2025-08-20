// import { useNavigate } from '@tanstack/react-router';
import { Button } from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import { Typography } from '../../atoms/Typography';
import { useRenderStore } from '@/shared/store/render-store';
import { useDummyStore } from '@/shared/store/dummy-store';

function FinishedMessage() {
  // const navigate = useNavigate();
  const setRole = useDummyStore((state) => state.setRole);
  const closeModalData = useRenderStore((state) => state.closeModal);
  return (
    <div className="mx-auto grid h-screen max-w-[90%] place-content-center text-center">
      <img
        src="/assets/characters/capito-default.png"
        width={300}
        alt="capo"
        className="mx-auto -mt-20"
      />
      <Spacer size="lg" />
      <div className="max-w-xl">
        <Typography variant="h4" className="text-white">
          Hemos enviado un correo electrónico a tu institución para verificar tu
          escuela.
        </Typography>
        <Spacer size="md" />
        <Button
          className="block w-full"
          variant="landing"
          size="lg"
          onClick={() => {
            // navigate('/teacher/classroom');
            setRole('teacher');
            closeModalData();
          }}
        >
          Volver a la página principal
        </Button>
      </div>
    </div>
  );
}

export default FinishedMessage;
