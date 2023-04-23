import axiosInstance from "./axios";

const SCHEDULES_URL = "schedules";

export async function fetchSchedules(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(SCHEDULES_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
