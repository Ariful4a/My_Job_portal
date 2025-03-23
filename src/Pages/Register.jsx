import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import AuthContext from "../Context/AuthContext";
import UserIconAnimate from "../assets/User2.json";
import Lottie from "lottie-react";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Find Job</NavLink>
      </li>
      <li>
        <NavLink to="/recruiters">Recruiters</NavLink>
      </li>
      <li>
        <NavLink to="/candidates">Candidates</NavLink>
      </li>
      <li>
        <NavLink to="/pages">Pages</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar text-white font-bold shadow-sm px-4">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="h-10" src={logo} alt="Job Box Logo" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-6">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          {user && user?.email ? (
            <div className="flex items-center gap-2">
              <div className="relative group">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-10 h-10">
                    <Lottie animationData={UserIconAnimate} loop={true} />
                  </div>
                )}
                {/* Hover করলে ইউজারের নাম দেখাবে */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "User"}
                </div>
              </div>

              <button
                onClick={handleLogOut}
                className="btn bg-[#FF9800] hover:bg-green-500 text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link className="btn bg-[#FF9800] hover:bg-green-500" to="/register">
                Register
              </Link>
              <Link className="btn bg-green-500 hover:bg-[#E68900]" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
