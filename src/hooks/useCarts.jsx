import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  // tan stack query
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCarts;
