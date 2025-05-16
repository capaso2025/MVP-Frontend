import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/shared/ui/layouts/main-layout';
import Spinner from '@/shared/ui/atoms/Spinner/Spinner';
import { PublicOnlyRoute } from './public-route';
import { PrivateRoute } from './private-route';

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

// INITIAL HOME WITH SIDEBAR
const SectionsPage = lazy(() => import('@/pages/sections'));
const LearnPage = lazy(() => import('@/pages/learn'));
const CalendarPage = lazy(() => import('@pages/calendar'));
const ShopPage = lazy(() => import('@pages/shop'));
const ProfilePage = lazy(() => import('@pages/profile'));
const TimerPage = lazy(() => import('@pages/timer'));

// LESSON
const LessonPage = lazy(() => import('@pages/lesson'));

// NOT FOUND
const NotFoundPage = lazy(() => import('@pages/not-found'));

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
        <Route path="/" element={<MainLayout />}>
          <Route path="/sections" element={<SectionsPage />} />
          <Route path="/modules/:section" element={<LearnPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Route>
        <Route path="/lesson/:module/:lesson" element={<LessonPage />} />

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
