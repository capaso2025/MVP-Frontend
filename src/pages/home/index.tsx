import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAuthStore,
} from '@/features/auth/auth-store';
import { WelcomeScreen } from '@shared/ui';

/**
 * Página de inicio (Home)
 * Implementación según mockup para mostrar la bienvenida y opciones para comenzar
 */
const HomePage: FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  // Si el usuario ya está autenticado, redirigir al dashboard
  if (isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Bienvenido de vuelta</h1>
          <p className="mb-6 text-gray-600">
            Tu dashboard personalizado está listo.
          </p>
          {/* Componente existente para dashboard */}
        </div>
      </div>
    );
  }

  // Pantalla de bienvenida para usuarios nuevos basada en el mockup
  return (
    <WelcomeScreen
      title="¡Hoy comienza tu transformación!"
      subtitle="¿Listo para convertirte en un CAPO?"
      characterImage="/assets/characters/capito-happy.png"
      decorativeImageUrl="/assets/illustrations/welcome-illustration.svg"
      primaryButtonText="COMENZAR"
      secondaryButtonText="TENGO UNA CUENTA"
      onPrimaryButtonClick={() => navigate('/categories')}
      onSecondaryButtonClick={() => navigate('/login')}
    />
  );
};

// Exportar como default para facilitar la carga dinámica
export default HomePage;
