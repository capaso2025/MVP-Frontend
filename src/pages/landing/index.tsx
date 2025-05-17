import { Button, Typography } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return <div className="bg-gradient-to-br grid place-content-center from-[#ccdae4] to-[#6b7091] h-screen">
    <div className="w-[90%] xl:w-full lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-rows-[max-content_auto] gap-16 max-w-[80%] mx-auto md:mx-0">
        <Typography variant="h2" className="text-primary-light">CAPO</Typography>
        <div className="text-center md:text-left">
          <Typography variant="h1" as="h1" className="text-primary-light">
            Hoy comienza tu transformación
          </Typography>
          <Typography className="text-secondary-dark text-xl mt-4">
            ¿Listo para convertirte en un CAPO?
          </Typography>
          <div className="grid grid-cols-1 gap-4 mt-14">
            <Button onClick={() => navigate("/categories")} size="lg" >Comenzar</Button>
            <Button onClick={() => navigate("/login")} variant="secondary" size="lg">Tengo una cuenta</Button>
          </div>
        </div>
      </div>
      <img src="/src/assets/landing.webp" className="hidden md:block justify-self-end" alt="capito en el escritorio" width={600} height={500} />
    </div>
  </div>
};

export default Landing;