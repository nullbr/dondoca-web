import axiosInstance from "./axios";

const CLIENTS_URL = "clients";

export async function fetchClients(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(CLIENTS_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
