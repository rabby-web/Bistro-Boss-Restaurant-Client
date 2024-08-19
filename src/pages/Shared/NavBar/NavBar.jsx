import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCarts();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className=" 1 text-lg font-medium hover:text-orange-600 hover:underline">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-orange-600" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-orange-600 text-lg font-medium  hover:underline">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-orange-600" : ""
          }
        >
          Menu
        </NavLink>
      </li>
      <li className="hover:text-orange-600  text-lg font-medium  hover:underline">
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-orange-600" : ""
          }
        >
          Order
        </NavLink>
      </li>

      {user && isAdmin && (
        <li className="hover:text-orange-600  text-lg font-medium  hover:underline">
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending " : isActive ? "text-orange-600" : ""
            }
          >
            Admin
          </NavLink>
        </li>
      )}
      {user && (
        <li className="hover:text-orange-600  text-lg font-medium  hover:underline">
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending " : isActive ? "text-orange-600" : ""
            }
          >
            User
          </NavLink>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <h2 className="flex justify-around gap-1 mt-2 text-lg font-medium hover:text-orange-600  hover:underline">
            <FaShoppingCart className="hover:text-orange-600"></FaShoppingCart>
            <div className="badge badge-secondary -mt-3 hover:bg-orange-600">
              + {cart.length}
            </div>
          </h2>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed max-w-screen-xl mx-auto z-10 bg-opacity-50 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-800 p-3 text-orange-600 rounded-sm -ml-2 z-[1] mt-2 w-60  shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="hover:text-orange-600 hover:border-orange-600 bg-black text-xl border px-4 py-2 rounded-md font-medium  hover:underline">
            {user ? (
              <>
                {/* <p>{user?.displayName}</p> */}
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
