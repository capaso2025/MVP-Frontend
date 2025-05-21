import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";
import { useRenderStore } from "@/shared/store/render-store";

function FinishedMessage() {
  const navigate = useNavigate();
  const closeModalData = useRenderStore((state) => state.closeModal);
  return <div className="grid place-content-center h-screen text-center">
    <img src="/assets/characters/capito-default.png" width={150} alt="capo" className="mx-auto -mt-20" />
    <Spacer size="lg" />
    <div className="max-w-xl">
      <Typography variant="h4" className="text-white">
        Hemos enviado un correo electrónico a tu institución para verificar tu escuela.
      </Typography>
      <Spacer size="md" />
      <Button className="w-full block" size="lg" onClick={() => {
        navigate("/classroom?role=teacher");
        closeModalData();
      }}>
        Volver a la página principal
      </Button>
    </div>
  </div>
};

export default FinishedMessage;