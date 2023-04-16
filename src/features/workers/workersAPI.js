const API_URL = "http://localhost:3000";

export async function fetchWorkers() {
  return fetch(`${API_URL}/api/v1/workers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error:", error);
      return {};
    });
}
