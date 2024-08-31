import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

// Create an instance of axios with a predefined base URL for secure API calls
const axiosSecure = axios.create({
  baseURL: "https://bistroboss-server-silk.vercel.app",
});

// Custom hook to utilize the secure axios
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptor =", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptors 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/");
      }
      console.log("status err", status);
      return Promise.reject(error);
    }
  );

  // Return the configured axios instance for secure API calls
  return axiosSecure;
};

export default useAxiosSecure;

// add commit useAxiosSecure.jsx
