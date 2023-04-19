import axios from "axios";

const instance = axios.create({
  baseURL: processResult.env.DONDOCA_API_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

export default instance;
