import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaGripHorizontal,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
// import { FaVoicemail } from "react-icons/fa6";

const Dashboard = () => {
  const [cart] = useCarts();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-orange-400 border-l-4 border-r-2 border-orange-600">
        <h2 className="text-center mt-8 text-2xl font-bold text-white border-b-4 mx-6 py-3 border-orange-600 rounded-lg hover:bg-orange-600">
          User Dashboard
        </h2>
        <ul className="menu text-xl px-6 py-3 ">
          {/* user home */}
          {isAdmin ? (
            <>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  <span>Admin Home</span>
                </Link>
              </li>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  <span>Add Items</span>
                </Link>
              </li>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/manageItem">
                  <FaList></FaList>
                  <span>Manage Item</span>
                </Link>
              </li>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/bookings">
                  <FaBook></FaBook>
                  <span>Manage Bookings</span>
                </Link>
              </li>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/users">
                  <FaUsers></FaUsers>
                  <span>All Users</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/userHome">
                  <FaHome></FaHome>
                  <span>User Home</span>
                </Link>
              </li>
              {/* Reservation */}
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  <span>Reservation</span>
                </Link>
              </li>
              {/* cart */}
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/cart">
                  <FaShoppingCart className="text-white"></FaShoppingCart>{" "}
                  <span>My Cart ({cart.length})</span>
                </Link>
              </li>
              {/* cart */}
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/review">
                  <FaAd className="text-white"></FaAd> <span>Add Review</span>
                </Link>
              </li>
              {/* bookings */}
              <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
                <Link to="/dashboard/bookings">
                  <FaList className="text-white"></FaList>{" "}
                  <span>My Bookings</span>
                </Link>
              </li>
            </>
          )}
          {/* common lin for everyone */}
          <div className="divider text-white border-white">OR</div>
          {/* user home */}
          <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
            <Link to="/">
              <FaHome></FaHome>
              <span>Home</span>
            </Link>
          </li>
          {/* user home */}
          <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
            <Link to="/order/salad">
              <FaGripHorizontal></FaGripHorizontal>
              <span>Menu</span>
            </Link>
          </li>
          {/* user home */}
          <li className="text-white gap-2 bg-orange-600 rounded-md my-2">
            <Link to="/contact">
              <FaEnvelope />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
