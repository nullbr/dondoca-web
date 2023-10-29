import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Client: import.meta.env.VITE_CLIENT_ID,
    withCredentials: true,
  },
});

export default instance;
