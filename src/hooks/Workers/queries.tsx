import { useQuery } from "@tanstack/react-query";
import { fetchWorkers } from "../../api/workersAPI";
import ResponseError from "../../lib/ResponseError";
import { AxiosError } from "axios";

const KEYS = {
  GET_WORKERS: "GET_WORKERS",
};

export const useGetWorkers = () => {
  return useQuery({
    queryKey: [KEYS.GET_WORKERS],
    queryFn: () => fetchWorkers(),
    onError: (err: AxiosError) =>
      ResponseError({
        err,
        message: "Falha ao iniciar a conversa, por favor tente novamente",
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
