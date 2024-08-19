import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistroboss-server-silk.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
