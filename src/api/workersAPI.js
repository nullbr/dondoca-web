import axiosInstance from "./axios";

const WORKERS_URL = "workers";

export async function fetchWorkers(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(WORKERS_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
