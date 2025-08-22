import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";

function QuickActions() {
  return <Card>
    <Typography className="font-bold">Acciones rápidas</Typography>
    <Spacer size="sm" />
    <Button variant="outline" className="w-full mb-2">Escribe tu diario</Button>
    <Button variant="outline" className="w-full">Configura tu avatar</Button>
  </Card>
};

export default QuickActions;