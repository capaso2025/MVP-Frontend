import { useAuthStore } from '@/features/auth/auth-store';
import { Button, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import { useNavigate } from '@tanstack/react-router';

function CreateProfile() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  if (isAuthenticated) return <></>;

  return (
    <Card>
      <div className="">
        <Typography className="mb-2 text-center">
          Termina de crear tu perfil
        </Typography>
        <Button
          className="w-full"
          size="md"
          onClick={() =>
            navigate({
              to: '/signup',
            })
          }
        >
          Créalo aquí
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          size="md"
          onClick={() =>
            navigate({
              to: '/login',
            })
          }
        >
          Iniciar sesión
        </Button>
      </div>
    </Card>
  );
}

export default CreateProfile;
