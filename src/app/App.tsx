import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { QueryProvider } from "@app/providers/query-provider";
import {
  selectIsAuthenticated,
  useAuthStore,
} from "@features/auth/model/auth-store";

// Importación de componentes de página con código splitting
const HomePage = lazy(() => import("@pages/home"));
const LoginPage = lazy(() => import("@pages/home"));
const RegisterPage = lazy(() => import("@pages/home"));
const ProfilePage = lazy(() => import("@pages/home"));
const NotFoundPage = lazy(() => import("@pages/home"));

/**
 * Rutas protegidas que requieren autenticación
 */
const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated) {
    // Redireccionar a login si no está autenticado
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

/**
 * Rutas públicas (solo accesibles cuando NO está autenticado)
 */
const PublicOnlyRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (isAuthenticated) {
    // Redireccionar a home si ya está autenticado
    return <Navigate to="/" replace />;
  }

  return <>{element}</>;
};

/**
 * Componente principal de la aplicación
 * Configura los proveedores globales y el enrutamiento
 */
export const App = () => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
          }
        >
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />

            {/* Rutas públicas solo cuando no está autenticado */}
            <Route
              path="/login"
              element={<PublicOnlyRoute element={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<PublicOnlyRoute element={<RegisterPage />} />}
            />

            {/* Rutas privadas */}
            <Route
              path="/profile"
              element={<PrivateRoute element={<ProfilePage />} />}
            />

            {/* Ruta 404 - No encontrado */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  );
};
