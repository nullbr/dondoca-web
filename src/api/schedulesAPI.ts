import { ScheduleResponse } from "../types/schedule";
import axiosInstance from "./axios";

const SCHEDULES_URL = "schedules";

interface Filters {
  startDate?: Date;
  endDate?: Date;
}

export async function fetchSchedules(
  accessToken: string,
  filters: Filters
): Promise<ScheduleResponse> {
  const startDate = filters.startDate ? filters.startDate.getTime() / 1000 : "";
  const endDate = filters.endDate ? filters.endDate.getTime() / 1000 : "";

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(`${SCHEDULES_URL}/start_date=${startDate}&end_date=${endDate}`, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
