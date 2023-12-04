import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../../api/clientsAPI";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export const KEYS = {
  GET_CLIENT: "GET_CLIENT",
  GET_CLIENTS: "GET_CLIENTS",
};

export const useGetClients = () => {
  const { session } = useSelector((state: RootState) => state.app);
  const accessToken = session?.access_token || "";

  return useQuery({
    queryKey: [KEYS.GET_CLIENTS, accessToken],
    queryFn: () => fetchClients(accessToken),
    enabled: !!accessToken,
  });
};
