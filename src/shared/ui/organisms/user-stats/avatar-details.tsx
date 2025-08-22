import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import Spacer from "../../atoms/Spacer";
import { Typography } from "../../atoms/Typography";

function AvatarDetails() {
  return <Card>
    <Typography className="font-bold">Avatar y sincronización</Typography>
    <Spacer size="sm" />
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <img src="/assets/characters/capito-default.png" width={70} height={70} />
        <div>
          <Typography>Capaso IA</Typography>
          <Typography className="text-secondary" variant="body2">Sincronizado ahora</Typography>
        </div>
      </div>
      <Button variant="ghost" size="md" className="h-max">Sync</Button>
    </div>
  </Card>
};

export default AvatarDetails;