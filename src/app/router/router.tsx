import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/shared/ui/layouts/main-layout';
import Spinner from '@/shared/ui/atoms/Spinner';
import { PublicOnlyRoute } from './public-route';
import LessonPathPage from '@/pages/lessons-path';
import TeacherLayout from '@/shared/ui/layouts/teacher-layout';

// Public
const LandingPage = lazy(() => import('@/pages/landing'));
const LoginPage = lazy(() => import('@/pages/login'));
const SignupPage = lazy(() => import('@/pages/signup'));

// Onboarding
// const CategoriesPage = lazy(
//   () => import('@/pages/onboarding/components/templates/Categories'),
// );
const OnboardingIntroPage = lazy(
  () => import('@/pages/onboarding/components/templates/Intro'),
);
const OnboardingQuestionsPage = lazy(
  () => import('@/pages/onboarding/components/templates/Questions'),
);
const OnboardingResultsPage = lazy(
  () => import('@/pages/onboarding/components/templates/Results'),
);
const OnboardingOutroPage = lazy(
  () => import('@/pages/onboarding/components/templates/Outro'),
);

// Home
const SectionsPage = lazy(() => import('@/pages/sections'));
const HomePage = lazy(() => import('@/pages/home'));
const LearnPage = lazy(() => import('@/pages/modules'));
const ShopPage = lazy(() => import('@/pages/shop'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const TimerPage = lazy(() => import('@/pages/timer'));
const ClassroomPage = lazy(() => import('@/pages/classroom'));
const InsightPage = lazy(() => import('@/pages/learning'));
const ChatsPage = lazy(() => import('@/pages/chats'));
const CalendarPage = lazy(() => import('@/pages/calendar'));
const GoalsPage = lazy(() => import('@/pages/goals'));
const HabitsPage = lazy(() => import('@/pages/habits'));
const LearningPage = lazy(() => import('@/pages/learning'));
const MotivationPage = lazy(() => import('@/pages/motivation'));

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
        {/* <Route path="/onboarding/categories" element={<CategoriesPage />} /> */}
        <Route path="/onboarding" element={<OnboardingIntroPage />} />
        <Route
          path="/onboarding/questions"
          element={<OnboardingQuestionsPage />}
        />
        <Route path="/onboarding/results" element={<OnboardingResultsPage />} />
        <Route path="/onboarding/outro" element={<OnboardingOutroPage />} />

        {/* Home */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/sections" element={<SectionsPage />} /> */}
          {/* <Route path="/modules/:sectionId" element={<LearnPage />} /> */}
          {/* <Route
            path="/modules/:sectionId/:moduleId"
            element={<LessonPathPage />}
          /> */}
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          {/* <Route path="/shop" element={<ShopPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/motivation" element={<MotivationPage />} />
        </Route>
        <Route path="/" element={<TeacherLayout />}>
          <Route path="/teacher/classroom" element={<ClassroomPage />} />
          <Route path="/teacher/calendar" element={<CalendarPage />} />
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Route>
        {/* <Route
          path="/lesson/:sectionId/:moduleId/:lessonId"
          element={<LessonPage />}
        /> */}

        {/* Ruta 404 - No encontrado */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
