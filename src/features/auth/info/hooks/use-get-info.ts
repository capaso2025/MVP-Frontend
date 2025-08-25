import { useQuery } from '@tanstack/react-query';
import { getInfo } from '../get-info-http';

export const useGetInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: getInfo,
  });
};
