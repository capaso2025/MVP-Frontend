import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import Breadcrumbs from "@/shared/ui/molecules/Breadcrumbs";
// import Categories from "../goals/components/organisms/categories";
import Tip from "../../shared/ui/organisms/tip";
import { Card } from "@/shared/ui/atoms/Card";
import gymImage from '@/assets/gimnasio.png'
import sleepImage from '@/assets/bolsa-de-dormir.png'
import waterImage from '@/assets/agua-mineral.png'
import bookImage from '@/assets/libro.png'
import brainImage from '@/assets/brain.png'
import socialImage from '@/assets/redes-sociales.png'

import { Button, Typography } from "@/shared/ui";
import Actions from "@/shared/ui/organisms/actions";
import { Edit } from "lucide-react";

const ITEMS = [
  {
    title: 'Moverse',
    image: gymImage
  },
  {
    title: 'Dormir',
    image: sleepImage
  },
  {
    title: 'Hidratarse',
    image: waterImage
  },
  {
    title: 'Lectura',
    image: bookImage
  },
  {
    title: 'Concentración',
    image: brainImage
  },
  {
    title: 'Detox digital',
    image: socialImage
  }
]
export default function HabitsPage() {
  return <div>
    <ModuleTitle text="Constructor de hábitos" />
    <Spacer size="md" />
    <Breadcrumbs
      links={[
        { text: 'Inicio', href: '/home' },
        { text: 'Constructor de hábitos', href: '/home/habits' },
      ]}
    />
    <Spacer size="lg" />
    <div className="grid grid-cols-1 md:grid-cols-[25%_auto] gap-8">
      <div className="flex flex-col gap-8">
        <Actions items={[{
          icon: Edit,
          text: 'Añadir nuevo hábito',
          onClick: () => { }
        }]} />
        <Tip />
      </div>
      <div>
        {/* <Categories /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {
            ITEMS.map((habit) => <Card withHover className="text-center">
              <img className="mx-auto w-[80px] h-[80px]" src={habit.image} width={80} height={80} />
              <Typography variant="h5" className="font-semibold">{habit.title}</Typography>
              <Spacer size="md" />
              <Typography variant="body2" className="text-gray-600 text-left">Nivel 1</Typography>
            </Card>)
          }
        </div>
        <Button className="w-full">Crear nuevo hábito</Button>
      </div>
    </div>

  </div>
}
