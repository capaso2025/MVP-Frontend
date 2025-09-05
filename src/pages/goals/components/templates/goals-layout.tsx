import { useRenderStore } from "@/shared/store/render-store";
import ModuleTitle from "@/shared/ui/atoms/ModuleTitle";
import Spacer from "@/shared/ui/atoms/Spacer";
import Breadcrumbs from "@/shared/ui/molecules/Breadcrumbs";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { CheckCircle, Edit, Goal, Search } from "lucide-react";
import CreateGoalsForm from "./create-goals-form";
import Tip from "@/shared/ui/organisms/tip";
import Actions from "@/shared/ui/organisms/actions";
import { useMemo } from "react";

function GoalsLayout() {
  const navigate = useNavigate();
  const setModalData = useRenderStore(state => state.setModalData);
  const breadcrumbs = useRenderStore(state => state.breadcrumbs);
  const ITEMS = useMemo(() => [
    {
      icon: Goal,
      text: 'Inicio',
      onClick: () => navigate({ to: "/home/goals" }),
      route: "/home/goals"
    },
    {
      icon: Edit,
      text: 'Crear nueva meta',
      onClick: () => setModalData({
        containerClassName: "bg-white",
        title: 'Crear nueva meta',
        children: <CreateGoalsForm />
      }),
    },
    {
      icon: Search,
      text: 'Ver mis metas activas',
      onClick: () => navigate({ to: "/home/goals/active" }),
      route: "/home/goals/active"
    },
    {
      icon: CheckCircle,
      text: 'Metas completadas',
      route: "/home/goals/completed",
      onClick: () => navigate({ to: "/home/goals/active" }),
    },
  ], []);

  return <><ModuleTitle text="Metas y seguimientos" />
    <Spacer size="md" />
    <Breadcrumbs
      links={breadcrumbs || [
        { text: 'Inicio', href: '/home' },
        { text: 'Metas y seguimientos', href: '/goals' },
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

export default GoalsLayout;