import { useQuery } from '@tanstack/react-query';
import { getInfo } from '../get-info-http';
import { useAuthStore } from '../../store/auth-store';

export const useGetInfo = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => {
      return getInfo().then((response) => {
        setIsAuthenticated(true);
        return response;
      });
    },
  });
};
