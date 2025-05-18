import { useAuthStore } from "@/features/auth/auth-store";
import { Navigate } from "react-router-dom";

export const PublicOnlyRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/sections" replace />;
  }

  return <>{element}</>;
};