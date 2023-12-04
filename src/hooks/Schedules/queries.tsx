import { useQuery } from "@tanstack/react-query";
import { fetchSchedules } from "../../api/schedulesAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const KEYS = {
  GET_SCHEDULES: "GET_SCHEDULES",
};

export const useGetSchedules = () => {
  const { session } = useSelector((state: RootState) => state.app);
  const { access_token } = session || {};

  return useQuery({
    queryKey: [KEYS.GET_SCHEDULES],
    queryFn: () => fetchSchedules(access_token || "", {}),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!access_token,
  });
};
