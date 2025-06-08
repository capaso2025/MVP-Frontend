import { useState } from 'react';
import { Button } from '../../atoms/Button';
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from '../../atoms/Spacer';
import { useRenderStore } from '@/shared/store/render-store';
import FinishedMessage from '../finished-message/FinishedMessage';
import { Typography } from '../../atoms/Typography';

function UpdateTeacherEmail() {
  const [email, setEmail] = useState<string>('');
  const setModalData = useRenderStore((state) => state.setModalData);

  const handleNextStep = () => {
    setModalData({
      fullScreen: true,
      children: <FinishedMessage />,
      containerClassName: 'bg-landing-dark',
    });
  };
  return (
    <div className="animate-fade-in max-[500px] z-10 mx-auto w-full">
      <Typography className="text-foreground font-normal" variant="h5">
        Usa tu dirección de correo electrónico institucional para que tu escuela
        te autorice lo antes posible
      </Typography>
      <Spacer size="lg" />
      <Input
        type="email"
        placeholder="Correo electrónico"
        className="mt-4"
        onChange={(ev) => setEmail(ev.target.value)}
        value={email}
        icon={<span>@mail.edu.pe</span>}
      />
      <Spacer size="lg" />
      <Button
        variant="landing"
        className="block w-full"
        disabled={!email}
        onClick={handleNextStep}
      >
        Actualizar correo electrónico
      </Button>
      <Spacer size="md" />
      <Button
        variant="secondary"
        className="block w-full"
        onClick={handleNextStep}
      >
        Saltar por ahora
      </Button>
    </div>
  );
}

export default UpdateTeacherEmail;
