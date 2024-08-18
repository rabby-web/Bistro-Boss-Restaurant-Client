import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaList, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-medium text-center">
        <span>Hi, Welcome</span>{" "}
        <span className="text-orange-600">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
      <hr className="my-5" />
      <div className="">
        <div className="stats shadow flex mx-auto">
          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaDollarSign></FaDollarSign>
            </div>
            <div className="stat-title text-lg font-medium">Revenue</div>
            <div className="stat-value">$: {stats?.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaUsers></FaUsers>
            </div>
            <div className="stat-title text-lg font-medium">Users</div>
            <div className="stat-value">{stats?.users}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title ext-lg font-medium">Orders</div>
            <div className="stat-value">{stats?.orders}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-4xl">
              <FaList></FaList>
            </div>
            <div className="stat-title ext-lg font-medium">Menu Items</div>
            <div className="stat-value">{stats?.menuItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
