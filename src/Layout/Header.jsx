import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
      <li className="flex flex-row gap-4">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>Find Job</NavLink>
        <NavLink to={'/'}>Recuiters</NavLink>
        <NavLink to={'/'}>Candidates</NavLink>
        <NavLink to={'/'}>Pages</NavLink>
        <NavLink to={'/'}>Blog</NavLink>
        <NavLink to={'/'}>Contact</NavLink>
      </li>
    </>
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar text-white font-bold shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
           {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <Link className="btn bg-[#ff7e5f] hover:bg-green-500" to='/register'>Register</Link>
            <Link className="btn bg-green-500 hover:bg-[#ff7e5f]" to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
