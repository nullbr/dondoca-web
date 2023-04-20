import axiosInstance from "./axios";

const LOGIN_URL = "oauth/token";
const SIGNUP_URL = "users";
const LOGOUT_URL = "oauth/revoke";
const CURRENT_USER_URL = "users/me";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

export async function createUser(credentials) {
  const data = { ...credentials, client_id: CLIENT_ID };

  return axiosInstance
    .post(SIGNUP_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function loginWithCredentials(credentials) {
  const data = {
    ...credentials,
    grant_type: "password",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axiosInstance
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function logoutUserWithToken(refreshToken) {
  const data = {
    token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axiosInstance
    .post(LOGOUT_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function requestAccessTokenWithRefreshToken(refreshToken) {
  const data = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axiosInstance
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function getCurrentUser(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(CURRENT_USER_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
