import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { QueryProvider } from '@app/providers/query-provider';
import {
  selectIsAuthenticated,
  useAuthStore,
} from '@features/auth/model/auth-store';

// Importación de componentes de página con code splitting
const HomePage = lazy(() => import('@pages/home'));
const LoginPage = lazy(() => import('@pages/not-found'));
const RegisterPage = lazy(() => import('@pages/not-found'));
const ProfilePage = lazy(() => import('@pages/not-found'));
const NotFoundPage = lazy(() => import('@pages/not-found'));
const CategoriesPage = lazy(() => import('@pages/categories'));
const QuestionnaireIntroPage = lazy(() => import('@pages/questionnaire/intro'));
const QuestionnaireQuestionsPage = lazy(
  () => import('@pages/questionnaire/questions'),
);
const QuestionnaireResultsPage = lazy(
  () => import('@pages/questionnaire/results'),
);
const DashboardPage = lazy(() => import('@pages/dashboard'));

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
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          }
        >
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />

            {/* Rutas del cuestionario */}
            <Route path="/questionnaire" element={<QuestionnaireIntroPage />} />
            <Route
              path="/questionnaire/questions"
              element={<QuestionnaireQuestionsPage />}
            />
            <Route
              path="/questionnaire/results"
              element={<QuestionnaireResultsPage />}
            />

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
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<DashboardPage />} />}
            />

            {/* Ruta 404 - No encontrado */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  );
};
