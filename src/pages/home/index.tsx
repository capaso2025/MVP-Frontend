import Avatar from './components/organisms/Avatar';
import ModulesList from './components/organisms/ModulesList';
import CapoTools from './components/organisms/CapoTools';
import CreateProfile from './components/organisms/CreateProfile';
import DailyTasks from './components/organisms/DailyTasks';
import Spacer from '@/shared/ui/atoms/Spacer';
import { useGetInfo } from '@/features/auth/info/hooks/use-get-info';
import { Navigate } from '@tanstack/react-router';
import { useAuthStore } from '@/features/auth/store/auth-store';
import { getFromSessionStorage } from '@/shared/lib/utils';

export default function Home() {
  const { data: userInfo, isFetching } = useGetInfo();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if ((!isFetching && !isAuthenticated) && (!getFromSessionStorage('user.id') || !getFromSessionStorage('profile.name')))
    return <Navigate to="/login" replace />;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_300px] lg:grid-rows-2">
      <CapoTools />
      <div className="mt-20">
        <Avatar user={userInfo?.firstName || ''} />
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
