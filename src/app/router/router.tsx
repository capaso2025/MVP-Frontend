import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/shared/ui/layouts/main-layout';
import Spinner from '@/shared/ui/atoms/Spinner';
import { PublicOnlyRoute } from './public-route';

// Public
const LandingPage = lazy(() => import('@/pages/landing'));
const LoginPage = lazy(() => import('@/pages/login'));
const SignupPage = lazy(() => import('@/pages/signup'));

// Onboarding
const CategoriesPage = lazy(
  () => import('@/pages/onboarding/components/templates/Categories'),
);
const OnboardingIntroPage = lazy(
  () => import('@/pages/onboarding/components/templates/Intro'),
);
const OnboardingQuestionsPage = lazy(
  () => import('@/pages/onboarding/components/templates/Questions'),
);
const OnboardingResultsPage = lazy(
  () => import('@/pages/onboarding/components/templates/Results'),
);

// Home
const SectionsPage = lazy(() => import('@/pages/sections'));
const LearnPage = lazy(() => import('@/pages/learn'));
const CalendarPage = lazy(() => import('@/pages/calendar'));
const ShopPage = lazy(() => import('@/pages/shop'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const TimerPage = lazy(() => import('@/pages/timer'));
const ClassroomPage = lazy(() => import('@/pages/classroom'));
const InsightPage = lazy(() => import('@/pages/insight'));
const PointsPage = lazy(() => import('@/pages/points'));
const ChatsPage = lazy(() => import('@/pages/chats'));

// Lessons
const LessonPage = lazy(() => import('@/pages/lesson'));

// Not found
const NotFoundPage = lazy(() => import('@/pages/not-found'));

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
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<PublicOnlyRoute element={<LoginPage />} />}
        />
        <Route
          path="/signup"
          element={<PublicOnlyRoute element={<SignupPage />} />}
        />

        {/* Onboarding */}
        <Route path="/onboarding/categories" element={<CategoriesPage />} />
        <Route path="/onboarding" element={<OnboardingIntroPage />} />
        <Route
          path="/onboarding/questions"
          element={<OnboardingQuestionsPage />}
        />
        <Route path="/onboarding/results" element={<OnboardingResultsPage />} />

        {/* Home */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/sections" element={<SectionsPage />} />
          <Route path="/modules/:section" element={<LearnPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Route>
        <Route path="/lesson/:module/:lesson" element={<LessonPage />} />

        {/* Ruta 404 - No encontrado */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
