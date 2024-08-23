import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// Custom hook to check if the current user is an admin
const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log("data", res.data);
      return res.data?.admin;  // Return the admin status (true or false)
    },
  });

   // Return the admin status and the loading state of the admin check
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
