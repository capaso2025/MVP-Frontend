import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  useAuthStore,
} from '@/features/auth/auth-store';
import MenuLayout from '@/shared/ui/layouts/menu-layout';
import Spinner from '@/shared/ui/atoms/Spinner/Spinner';

const HomePage = lazy(() => import('@pages/home'));
const LoginPage = lazy(() => import('@pages/login'));
const SignupPage = lazy(() => import('@pages/signup'));
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
const SectionsPage = lazy(() => import('@/pages/sections'));
const CalendarPage = lazy(() => import('@pages/calendar'));
const ShopPage = lazy(() => import('@pages/shop'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TimerPage = lazy(() => import('@pages/timer'));

// NOT FOUND
const NotFoundPage = lazy(() => import('@pages/not-found'));

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

const PublicOnlyRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/sections" replace />;
  }

  return <>{element}</>;
};

function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Spinner />
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
          <Route path="/sections" element={<SectionsPage />} />
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
          path="/signup"
          element={<PublicOnlyRoute element={<SignupPage />} />}
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
  );
}

export default AppRouter;
