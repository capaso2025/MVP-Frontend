import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  selectIsAuthenticated,
  useAuthStore,
} from '@/features/auth/auth-store';
import MenuLayout from '@/shared/ui/layouts/menu-layout';

// Importación de componentes de página con code splitting
const HomePage = lazy(() => import('@pages/home'));
const LoginPage = lazy(() => import('@pages/not-found'));
const RegisterPage = lazy(() => import('@pages/not-found'));
const CategoriesPage = lazy(() => import('@pages/categories'));
const QuestionnaireIntroPage = lazy(() => import('@pages/questionnaire/intro'));
const QuestionnaireQuestionsPage = lazy(
  () => import('@pages/questionnaire/questions'),
);
const QuestionnaireResultsPage = lazy(
  () => import('@pages/questionnaire/results'),
);
const DashboardPage = lazy(() => import('@pages/dashboard'));

// ROADMAP
const LearnPage = lazy(() => import('@pages/learn'));
const CalendarPage = lazy(() => import('@pages/calendar'));
const ShopPage = lazy(() => import('@pages/shop'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TimerPage = lazy(() => import('@pages/timer'));

// NOT FOUND
const NotFoundPage = lazy(() => import('@pages/not-found'));

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
    return <Navigate to="/" replace />;
  }

  return <>{element}</>;
};

function AppRouter() {
  return (
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
          <Route path="/" element={<MenuLayout />}>
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/timer" element={<TimerPage />} />
          </Route>

          {/* Redirección a la página de inicio */}

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
  );
}

export default AppRouter;
