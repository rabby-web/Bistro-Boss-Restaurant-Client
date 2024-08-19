import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCarts();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} add to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login!",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={image} className="w-full" alt="Item Name" />
        </figure>
        <p className="absolute right-0 bg-orange-600 opacity-80 border rounded-md p-1 text-white ">
          $ {price}
        </p>
        <div className="card-body flex flex-col justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 60)}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-b-4 border-orange-600 mt-4 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
