import axios from "./axios";

const LOGIN_URL = "/oauth/token";
const SIGNUP_URL = "/users";
const LOGOUT_URL = "/oauth/revoke";
const CURRENT_USER_URL = "/users/me";

const CLIENT_ID = process.env.DONDOCA_API_CLIENT_ID;
const CLIENT_SECRET = process.env.DONDOCA_API_CLIENT_SECRET;

export async function createUser(credentials) {
  const data = { ...credentials, client_id: CLIENT_ID };

  return axios
    .post(SIGNUP_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
