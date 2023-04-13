const API_URL = "http://localhost:3000";

export async function fetchEmployees() {
  return fetch(`${API_URL}/employees.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error:", error);
      return {};
    });
}
