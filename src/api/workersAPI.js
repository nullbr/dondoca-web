import axiosInstance from "./axios";

const WORKERS_URL = "workers";

export async function fetchWorkers() {
  return axiosInstance
    .get(WORKERS_URL)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
