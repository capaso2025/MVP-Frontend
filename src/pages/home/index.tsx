import { useAuthStore } from '@/features/auth/auth-store';
import Avatar from './components/organisms/Avatar';
import ModulesList from './components/organisms/ModulesList';
import CapoTools from './components/organisms/CapoTools';
import CreateProfile from './components/organisms/CreateProfile';
import DailyTasks from './components/organisms/DailyTasks';
import Spacer from '@/shared/ui/atoms/Spacer';
// import { useGetInfo } from '@/features/auth/info/hooks/use-get-info';

export default function Home() {
  const user = useAuthStore((state) => state.user);
  // const { data: userInfo } = useGetInfo();
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // if (
  //   (!localStorage.getItem('profile') || !localStorage.getItem('user')) &&
  //   !userInfo?.id
  // )
  //   return <Navigate to="/onboarding" replace />;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_300px] lg:grid-rows-2">
      <CapoTools />
      <div className="mt-20">
        <Avatar user={user?.firstName || 'Fernando'} />
      </div>
      <ModulesList />
      <div>
        <DailyTasks />
        <Spacer size="md" />
        <CreateProfile />
      </div>
    </div>
  );
}
