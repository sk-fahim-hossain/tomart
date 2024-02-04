import { FaEnvelope, FaFlagUsa, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { Authcontext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
const Header = () => {
  const { user, logOut } = useContext(Authcontext);
  const isAdmin = useAdmin();

  const [cart] = useCart();
  const userOrders = cart.filter((item) => item.email == user?.email);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        {" "}
        <Link
          to="/"
          className="text-black py-1 px-2 hover:bg-[#FF217F] hover:text-black"
        >
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/blog"
          className="text-black py-1 px-2 hover:bg-[#FF217F] hover:text-black"
        >
          Blogs
        </Link>
      </li>
      {isAdmin && (
        <>
          <li>
            {" "}
            <Link
              to="/allusers"
              className="text-black py-1 px-2 hover:bg-[#FF217F] hover:text-black"
            >
              All Users
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/addtoy"
              className="text-black py-1 px-2 hover:bg-[#FF217F] hover:text-black"
            >
              Add Toy
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="flex justify-between py-1 bg-gray-100 text-gray-700 px-2">
        <div>
          <p className="text-xs font-semibold">
            Worlds Fastest online Shopping Deastination
          </p>
        </div>
        <div className="">
          <nav className="flex items-center">
            <a
              href="mailto:tmart@gmail.com"
              className="flex items-center no-underline mr-2 text-xs font-semibold"
            >
              <FaEnvelope />
              tmart@gmail.com
            </a>
            <a
              href=""
              className="flex items-center no-underline mr-2 text-xs font-semibold"
            >
              <FaFlagUsa />
              English
            </a>
          </nav>
        </div>
      </div>
      {/* top header end */}
      <div className="navbar bg-amber-300 rounded-b-lg mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300  rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <div className="flex">
              <span className="text-[#FF217F] font-extrabold text-3xl">T</span>
              <span className="text-black font-extrabold text-3xl">-</span>
              <span className="text-black text-3xl">MART</span>
              <span className="text-[#FF217F] text-3xl font-extrabold">.</span>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 items-center text-black">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link
              to="/signin"
              className="flex items-center text-sm text-black mx-2 hover:scale-110"
            >
              <FaRegUser className="mr-1 " />
              Sign In
            </Link>
          )}
          <Link
            to="/cart"
            className="flex items-center text-sm text-black mx-2 hover:scale-110"
          >
            <div className="flex">
              <GiShoppingCart className="mr-1 text-xl align-bottom mt-2 -mr-2" />
              <div className="badge badge-secondary align-top">
                {userOrders.length}
              </div>
            </div>
            Cart
          </Link>
        </div>
      </div>
      {/* header end */}
    </>
  );
};

export default Header;
