
import { useAuthStore } from '@/features/auth/auth-store';
import Avatar from './components/organisms/Avatar';
import ModulesList from './components/organisms/ModulesList';
import CapoTools from './components/organisms/CapoTools';
import CreateProfile from './components/organisms/CreateProfile';
import DailyTasks from './components/organisms/DailyTasks';
import Spacer from '@/shared/ui/atoms/Spacer';



export default function Home() {
  const user = useAuthStore((state) => state.user);
  // const profile = useAuthStore((state) => state.profile);
  // if (!localStorage.getItem('profile') || !localStorage.getItem('user')) return <Navigate to="/onboarding" replace />;
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_300px] lg:grid-rows-2">
      <CapoTools />
      <div className='mt-20'>
        <Avatar user={user?.firstName || "Fernando"} />
      </div>
      <ModulesList />
      <div>
        <DailyTasks />
        <Spacer size='md' />
        <CreateProfile />
      </div>
    </div>
  );
}
