import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import Breadcrumbs from "@/shared/ui/molecules/Breadcrumbs";
import { Outlet, useNavigate } from "@tanstack/react-router";
import Tip from "@/shared/ui/organisms/tip";
import Actions from "@/shared/ui/organisms/actions";
import { useMemo } from "react";
import { Clock1, Goal } from "lucide-react";
import { useRenderStore } from "@/shared/store/render-store";

function HabitsLayout() {
  const navigate = useNavigate();
  const breadcrumbs = useRenderStore(state => state.breadcrumbs);
  console.log("🏝️ ~ HabitsLayout ~ breadcrumbs:", breadcrumbs)
  const ITEMS = useMemo(() => [
    {
      icon: Clock1,
      text: 'Inicio',
      onClick: () => navigate({ to: "/home/habits" }),
      route: "/home/habits"
    },
    {
      icon: Goal,
      text: 'Hábitos completadas',
      onClick: () => navigate({ to: "/home/habits" }),
      route: "/home/habits/completed"
    },
  ], []);

  return <><ModuleTitle text="Constructor de hábitos" />
    <Spacer size="md" />
    <Breadcrumbs
      links={breadcrumbs || [
        { text: 'Inicio', href: '/home' },
        { text: 'Constructor de hábitos' },
      ]}
    />
    <Spacer size="lg" />
    <div className="grid grid-cols-1 md:grid-cols-[25%_auto] gap-8">
      <div className="flex flex-col gap-8">
        <Actions items={ITEMS} />
        <Tip />
      </div>
      <div className='grid gap-8'>
        <Outlet />
      </div>
    </div></>
};

export default HabitsLayout;