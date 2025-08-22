import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../services/get-goals";

export const useGetGoals = () => {
  return useQuery({
    queryKey: ['goals'],
    queryFn: getGoals
  });
};
