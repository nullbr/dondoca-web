import axiosInstance from "./axios";

const SCHEDULES_URL = "schedules";

export async function fetchSchedules(accessToken, filters) {
  console.log(filters);
  const params = new URLSearchParams([
    ["worker_id", filters.workerFilter],
    ["date", filters.dateFilter],
  ]);

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params,
  };

  return axiosInstance
    .get(SCHEDULES_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
