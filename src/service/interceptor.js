import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_MAIN_URL, // your backend base URL
  timeout: 10000, // optional: request timeout
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (optional, handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized, redirecting to login...");
      // e.g. redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
