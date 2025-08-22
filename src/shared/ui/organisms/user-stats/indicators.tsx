import { Card } from "../../atoms/Card";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";

function Indicators() {
  return <Card>
    <Typography className="font-bold">Indicadores clave</Typography>
    <Spacer size="sm" />
    <Typography variant="body2">CRP: 0.50</Typography>
    <Typography variant="body2">IPP: 0.28%</Typography>
    <Typography variant="body2">IMIA: Activo</Typography>
  </Card>
};

export default Indicators;