import {
  Credentials,
  EditUserPayload,
  SessionResponse,
  UserResponse,
} from "../types/sessions";
import axiosInstance from "./axios";

const LOGIN_URL = "oauth/token";
const SIGNUP_URL = "users";
const EDIT_USER_URL = "users";
const LOGOUT_URL = "oauth/revoke";
const CURRENT_USER_URL = "users/me";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

export async function createUser(
  credentials: Credentials
): Promise<UserResponse> {
  const data = { ...credentials, client_id: CLIENT_ID };

  return axiosInstance
    .post(SIGNUP_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function loginWithCredentials(credentials: {
  email: string;
  password: string;
}): Promise<SessionResponse> {
  const data = {
    ...credentials,
    grant_type: "password",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axiosInstance.post(LOGIN_URL, data).then((response) => response.data);
}

export async function signUpUser(
  payload: EditUserPayload
): Promise<UserResponse> {
  const data = { ...payload, client_id: CLIENT_ID };

  return axiosInstance.post(SIGNUP_URL, data).then((response) => response.data);
}

export async function logoutUserWithToken(
  refreshToken: string
): Promise<{ errors?: string }> {
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

export async function editUserWithToken(
  payload: Credentials
): Promise<UserResponse> {
  const data = {
    registration: {
      email: payload.email,
      password: payload.password,
      current_password: payload.currentPassword,
    },
  };

  const config = {
    headers: {
      Authorization: `Bearer ${payload.accessToken}`,
      Client: CLIENT_ID,
    },
  };

  return axiosInstance
    .patch(EDIT_USER_URL, data, config)
    .then((response) => response.data);
}

export async function requestAccessTokenWithRefreshToken(
  refreshToken: string
): Promise<SessionResponse> {
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

export async function getCurrentUser(
  accessToken: string | null
): Promise<UserResponse> {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axiosInstance
    .get(CURRENT_USER_URL, config)
    .then((response) => response.data);
}
