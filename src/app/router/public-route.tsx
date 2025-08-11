import { useAuthStore } from '@/features/auth/auth-store';
import { useDummyStore } from '@/shared/store/dummy-store';
import { Navigate } from 'react-router-dom';

export const PublicOnlyRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useDummyStore((state) => state.role);
  console.log('🏝️ ~ PublicOnlyRoute ~ role:', role);

  if (isAuthenticated) {
    return role !== 'teacher' ? (
      <Navigate to="/sections" replace />
    ) : (
      <Navigate to="/teacher/classroom" replace />
    );
  }

  return <>{element}</>;
};
