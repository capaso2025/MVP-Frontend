import { useAuthStore } from "@/features/auth/auth-store";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

