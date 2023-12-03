import { useQuery } from "@tanstack/react-query";
import { fetchWorkers } from "../../api/workersAPI";

const KEYS = {
  GET_WORKERS: "GET_WORKERS",
};

export const useGetWorkers = () => {
  return useQuery({
    queryKey: [KEYS.GET_WORKERS],
    queryFn: () => fetchWorkers(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
