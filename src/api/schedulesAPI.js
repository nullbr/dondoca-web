import axiosInstance from "./axios";

const SCHEDULES_URL = "schedules";

export async function fetchSchedules(accessToken, filters) {
  const startDate = filters.startDate ? filters.startDate.getTime() / 1000 : "";
  const endDate = filters.endDate ? filters.endDate.getTime() / 1000 : "";

  const params = new URLSearchParams([
    ["start_date", startDate],
    ["end_date", endDate],
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
