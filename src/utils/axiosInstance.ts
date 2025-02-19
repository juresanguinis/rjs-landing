import axios from "axios";
import { API_URL } from "./constants";


// Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 500,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;