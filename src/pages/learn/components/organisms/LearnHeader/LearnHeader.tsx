import { Icon, Typography } from "@/shared/ui";
import { Link } from "react-router-dom";

function LearnHeader() {
  return <div className="bg-primary-lighter rounded-2xl p-2 shadow-md">
    <Link className="flex items-center text-sm opacity-50" to="/sections">
      <Icon className="scale-75" name="arrow-left" />
      Volver a secciones
    </Link>
    <Typography variant="h3" className="p-2">
      Comunicación efectiva
    </Typography>
  </div>
};

export default LearnHeader;