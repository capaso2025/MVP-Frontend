import { useAuthStore } from '@/features/auth/auth-store';
import { useRenderStore } from '@/shared/store/render-store';
import { Button } from '@/shared/ui';
import Auth from '@/shared/ui/templates/auth';
import {
  AUTH_SCREENS,
  AuthScreen,
} from '@/shared/ui/templates/auth/auth-screens';

function CreateProfile() {
  const setModalData = useRenderStore((state) => state.setModalData);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleAuthClick = (initialScreen?: AuthScreen) => {
    setModalData({
      children: <Auth initialScreen={initialScreen} />,
      fullScreen: true,
    });
  };

  if (isAuthenticated) return <></>;

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="space-y-4">
        <div className="text-center font-medium">Crea tu perfil</div>

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => handleAuthClick()}
        >
          Créalo
        </Button>

        <Button
          variant="primary"
          className="w-full"
          onClick={() => handleAuthClick(AUTH_SCREENS.LOGIN)}
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}

export default CreateProfile;
