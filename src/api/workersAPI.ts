import { WorkersResponse } from "../types/worker";
import axiosInstance from "./axios";

const WORKERS_URL = "workers";

export async function fetchWorkers(): Promise<WorkersResponse> {
  return axiosInstance.get(WORKERS_URL).then((response) => response.data);
}
