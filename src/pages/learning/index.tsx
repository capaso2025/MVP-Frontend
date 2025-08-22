import { Button, Typography } from "@/shared/ui";
import { Card } from "@/shared/ui/atoms/Card";
import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import Breadcrumbs from "@/shared/ui/molecules/Breadcrumbs";
import { ArrowRight, Book, Lightbulb, Plus } from "lucide-react";

export default function LearningPage() {
  return <div>
    <ModuleTitle text="Aprendizaje y reflexión" />
    <Spacer size="md" />
    <Breadcrumbs
      links={[
        { text: 'Inicio', href: '/home' },
        { text: 'Aprendizaje y reflexión', href: '/home/learning' },
      ]}
    />
    <Spacer size="lg" />
    <div>
      <Card>
        <div className="flex justify-between">
          <ModuleTitle text="Diario Capaso" />
          <div className="flex gap-2">
            <Button variant="primary"><Plus />Nueva entrada</Button>
            <Button variant="outline">Nota rápida</Button>
          </div>
        </div>
        {[1, 2].map(() => <div className="bg-gray-100 p-4 rounded-md mt-4">
          <div className="flex justify-between">
            <Typography className="text-secondary">28-02-2025</Typography>
            <Typography className="text-secondary">Profundidad: 4</Typography>
          </div>
          <Spacer size="md" />
          <Typography className="line-clamp-2 h-12 text-ellipsis">
            Hoy me puse una meta de 30 minutos de estudio y lo logré, me siento muy orgulloso de mí mismo por haber cumplido con mi objetivo. Además, aprendí nuevas técnicas de estudio que me ayudaron a concentrarme mejor.
            Hoy me puse una meta de 30 minutos de estudio y lo logré, me siento muy orgulloso de mí mismo por haber cumplido con mi objetivo. Además, aprendí nuevas técnicas de estudio que me ayudaron a concentrarme mejor.
            Hoy me puse una meta de 30 minutos de estudio y lo logré, me siento muy orgulloso de mí mismo por haber cumplido con mi objetivo. Además, aprendí nuevas técnicas de estudio que me ayudaron a concentrarme mejor.
            Hoy me puse una meta de 30 minutos de estudio y lo logré, me siento muy orgulloso de mí mismo por haber cumplido con mi objetivo. Además, aprendí nuevas técnicas de estudio que me ayudaron a concentrarme mejor.
          </Typography>
        </div>)}
        <Spacer size="lg" />
        <div className="flex justify-end">
          <Button variant="ghost">Ver más <ArrowRight /></Button>
        </div>
      </Card>
      <Spacer size="lg" />
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-yellow-400" />
        <ModuleTitle text="Vivir el ahora - Sesiones rapidas" />
      </div>
      <Spacer size="md" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <Typography className="font-bold">3 min</Typography>
          <Typography className="line-clamp-2 h-12 text-ellipsis">Conecta con la respiración y la atención plena.</Typography>
        </Card>
        <Card>
          <Typography className="font-bold">5 min</Typography>
          <Typography className="line-clamp-2 h-12 text-ellipsis">Escaneo corporal.</Typography>
        </Card>
        <Card>
          <Typography className="font-bold">10 min</Typography>
          <Typography className="line-clamp-2 h-12 text-ellipsis">Desconecta notificaciones.</Typography>
        </Card>
      </div>
      <Spacer size="lg" />
      <div className="flex gap-2 items-center">
        <Book className="text-blue-400" />
        <ModuleTitle text="Notas personales" />
      </div>
      <Spacer size="md" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <Typography variant="body2" className="text-secondary">Aprendizaje</Typography>
          <Typography>prioriza tareas en bloques de 2 horas.</Typography>
        </Card>

        <Card>
          <Typography variant="body2" className="text-secondary">Favorito </Typography>
          <Typography>Rutina matutina: 10 minutos de meditación</Typography>
        </Card>
      </div>
    </div>
  </div>
}
