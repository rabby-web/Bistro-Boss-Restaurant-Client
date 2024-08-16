import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCcStripe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
      <h2 className="text-center text-3xl font-bold p-3 mb-3  border-orange-600 border-b-4">
        My Cart
      </h2>
      <div className="flex justify-around text-xl p-4">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button
              disabled={!cart.length}
              className="btn bg-orange-600 text-white gap-2 flex"
            >
              <FaCcStripe />
              Pay Now
            </button>
          </Link>
        ) : (
          <button className="btn bg-orange-600 text-white gap-2 flex">
            <FaCcStripe />
            Pay Now
          </button>
        )}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={cart._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                  </td>
                  <td className="text-lg font-semibold">$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
