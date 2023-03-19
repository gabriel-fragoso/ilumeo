import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_API_KEY,
});

export { axiosInstance };
