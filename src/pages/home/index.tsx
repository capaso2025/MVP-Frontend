import type { FC } from "react";

import { useCurrentUserQuery } from "@entities/user/api/user-queries";
import {
  selectIsAuthenticated,
  useAuthStore,
} from "@features/auth/model/auth-store";
import { Button } from "@shared/ui/atoms/Button/Button";

/**
 * Página de inicio (Home)
 * Muestra diferente contenido según si el usuario está autenticado
 */
const HomePage: FC = () => {
  // Acceder al estado global de autenticación
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const { logout } = useAuthStore();

  // Obtener datos del usuario actual si está autenticado
  const { data: currentUser, isLoading, error } = useCurrentUserQuery();

  // Renderizado condicional basado en el estado de autenticación
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">Bienvenido a CAPO</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          Inicia sesión para acceder a todas las funcionalidades de la
          aplicación.
        </p>
        <div className="space-x-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // Redirigir a la página de login
              window.location.href = "/login";
            }}
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              // Redirigir a la página de registro
              window.location.href = "/register";
            }}
          >
            Registrarse
          </Button>
        </div>
      </div>
    );
  }

  // Manejo de estados de carga y error
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error || !currentUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">
          No se pudo cargar la información del usuario. Por favor, intenta
          nuevamente.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reintentar
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            Bienvenido, {currentUser.firstName}!
          </h1>
          <Button variant="outline" onClick={() => logout()}>
            Cerrar Sesión
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Información de Usuario</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Nombre</p>
              <p className="font-medium">
                {currentUser.firstName} {currentUser.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{currentUser.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Rol</p>
              <p className="font-medium capitalize">{currentUser.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Miembro desde</p>
              <p className="font-medium">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí irían widgets o tarjetas con funcionalidades */}
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
            <h3 className="font-semibold mb-2">Análisis de Datos</h3>
            <p className="text-sm text-gray-600 mb-3">
              Revisa los últimos análisis y reportes de tu cuenta.
            </p>
            <Button variant="primary" size="sm">
              Ver Análisis
            </Button>
          </div>

          <div className="bg-green-50 p-4 rounded-md border border-green-100">
            <h3 className="font-semibold mb-2">Proyectos Activos</h3>
            <p className="text-sm text-gray-600 mb-3">
              Administra tus proyectos en curso y revisa su progreso.
            </p>
            <Button variant="primary" size="sm">
              Ver Proyectos
            </Button>
          </div>

          <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
            <h3 className="font-semibold mb-2">Configuraciones</h3>
            <p className="text-sm text-gray-600 mb-3">
              Personaliza la configuración de tu cuenta y preferencias.
            </p>
            <Button variant="primary" size="sm">
              Configurar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportar como default para facilitar la carga dinámica
export default HomePage;
