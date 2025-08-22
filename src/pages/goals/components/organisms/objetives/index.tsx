import { Typography } from "@/shared/ui";
import { Card } from "@/shared/ui/atoms/Card";
import Spacer from "@/shared/ui/atoms/Spacer";
import Tabs from "@/shared/ui/molecules/Tabs";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const DEFAULT_TAB = 'short-term';
const TABS = [
  {
    label: "Corto plazo",
    value: "short-term"
  },
  {
    label: "Mediano plazo",
    value: "medium-term"
  },
  {
    label: "Largo plazo",
    value: "long-term"
  }
]
function Objetives() {
  const [selectedTab, setSelectedTab] = useState<string>(DEFAULT_TAB);
  const navigate = useNavigate()
  const objectivesByTab: Record<string, { period: string; objectives: string[] }> = {
    'short-term': {
      period: "Proximas 4 semanas",
      objectives: ['Leer un libro', 'Hacer ejercicio 3 veces a la semana']
    },
    'medium-term': {
      period: "2 - 6 meses",
      objectives: ['Aprender React', 'Ahorrar para un viaje']
    },
    'long-term': {
      period: "6 meses - 1 año",
      objectives: ['Graduarme de la universidad', 'Comprar una casa']
    }
  };
  return (
    <Card>
      <div className="flex justify-between">
        <Typography className="font-semibold" variant="h5">
          Objetivos
        </Typography>
        <div className="flex gap-1 cursor-pointer" onClick={() => navigate({ to: '/home/objetives' })}>
          <Typography variant="body2">Ver mas</Typography>
          <ArrowRight size={20} />
        </div>
      </div>
      <Typography
        as="small"
        className="text-gray-600"
        variant="body2"
      >
        Organiza tus metas según el tiempo de ejecución
      </Typography>
      <Spacer size='lg' />
      <Tabs tabs={TABS} onChange={(value) => setSelectedTab(value)} defaultTab={DEFAULT_TAB} />
      <Typography variant="body1" className="font-semibold">
        {objectivesByTab[selectedTab]?.period}
      </Typography>
      <Spacer size="md" />
      <ul className="space-y-2">
        {objectivesByTab[selectedTab]?.objectives.map((obj, idx) => (
          <Typography as="li" variant="body2" key={idx} className="bg-gray-100/50 rounded p-2">
            {obj}
          </Typography>
        ))}
      </ul>
    </Card>
  )
};

export default Objetives;