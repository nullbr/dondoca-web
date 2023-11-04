import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/sessionAPI";

export const KEYS = {
  GET_USER: "GET_USER",
};

export const useGetUser = ({ accessToken }: { accessToken: string }) => {
  return useQuery({
    queryKey: [KEYS.GET_USER, accessToken],
    queryFn: () => getCurrentUser(accessToken),
    enabled: !!accessToken,
  });
};
