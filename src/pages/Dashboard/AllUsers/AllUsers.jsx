import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //  handle make admin
  const handleMakeAdmin = () => {
    // todo: handle make admin
  };

  // handle delete
  const handleDeleteUsers = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deleteCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around text-3xl font-medium p-3 text-orange-600">
        <h2> All Users</h2>
        <h2>Total Users: {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-medium">
                <th>##</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((users, index) => (
                <tr key={users._id}>
                  <th>{index + 1}</th>
                  <td className="text-lg">{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleMakeAdmin(users)}
                      className="btn btn-ghost btn-sm bg-orange-600"
                    >
                      <FaUsers className="text-2xl text-white m-1"></FaUsers>
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDeleteUsers(users)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
