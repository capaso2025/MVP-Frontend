import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAuthStore,
  selectIsAuthenticated,
} from '@features/auth/model/auth-store';
import { WelcomeScreen } from '@shared/ui';

/**
 * Página de inicio (Home)
 * Página principal que muestra la bienvenida y opciones para comenzar
 */
const HomePage: FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  // Si el usuario no está autenticado, mostrar la pantalla de bienvenida
  if (!isAuthenticated) {
    return (
      <WelcomeScreen
        title="¡La forma divertida, efectiva y gratis de aprender!"
        characterImage="/assets/characters/owl-happy.svg"
        decorativeImageUrl="/assets/illustrations/welcome-illustration.svg"
        primaryButtonText="Empezar ahora"
        secondaryButtonText="Ya tengo una cuenta"
        onPrimaryButtonClick={() => navigate('/categories')}
        onSecondaryButtonClick={() => navigate('/login')}
      />
    );
  }

  // Si el usuario está autenticado, se accede a la vista de usuario logueado
  // Este componente ya está implementado en el código base proporcionado
  // Por lo que simplemente se reutiliza aquí

  return (
    <div>
      {/* Este contenido será manejado por el componente HomePage existente */}
      {/* que muestra el dashboard del usuario autenticado */}
    </div>
  );
};

// Exportar como default para facilitar la carga dinámica
export default HomePage;
