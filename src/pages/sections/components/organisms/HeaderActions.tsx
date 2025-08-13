import { useRenderStore } from '@/shared/store/render-store';
import Popover from '@/shared/ui/molecules/Popover';
import { MenuIcon } from '@/shared/ui/atoms/Icon/Icon';
import { LogOut, UserCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/auth-store';

function HeaderActions() {
  const toggleOpenedSidebar = useRenderStore(
    (state) => state.toggleOpenedSidebar,
  );
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between">
      <MenuIcon
        className="text-primary block xl:hidden"
        onClick={toggleOpenedSidebar}
      />
      <div className="hidden xl:block" />
      <div className="flex items-center justify-between gap-6">
        <Popover
          contentClassName="left-[-124px] top-2 p-0"
          trigger={() => (
            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1">
              {user?.firstName}
              <UserCircleIcon />
            </div>
          )}
          content={() => (
            <div className="w-40">
              <button
                className="flex w-full cursor-pointer items-center gap-2 rounded-md"
                onClick={() => {
                  navigate('/');
                }}
              >
                <LogOut size={16} />
                Cerrar sesión
              </button>
            </div>
          )}
        />
      </div>
    </header>
  );
}

export default HeaderActions;
