import { useState } from "react";
import { Button } from "../../atoms/Button";
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from "../../atoms/Spacer";
import { useRenderStore } from "@/shared/store/render-store";
import FinishedMessage from "../finished-message/FinishedMessage";

function UpdateTeacherEmail() {
  const [email, setEmail] = useState<string>("");
  const setModalData = useRenderStore((state) => state.setModalData);

  const handleNextStep = () => {
    setModalData({
      fullScreen: true,
      children: <FinishedMessage />,
      containerClassName: "bg-landing",
    })
  }
  return <div className="max-w-xl mx-auto animate-fade-in">
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
    <Button size="lg" className="block w-full" disabled={!email} onClick={handleNextStep}>
      Actualizar correo electrónico
    </Button>
    <Spacer size="md" />
    <Button size="lg" variant="secondary" className="block w-full" onClick={handleNextStep}>
      Saltar por ahora
    </Button>
  </div>
};

export default UpdateTeacherEmail;