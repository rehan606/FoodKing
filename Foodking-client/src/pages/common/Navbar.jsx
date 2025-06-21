import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and set class in the body
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect to add/remove dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  

  const links = (
    <>
      <li className="font-Oswald uppercase ">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 rounded-none " : "text-white"
        }>Home</NavLink>
      </li>

      <li className="font-Oswald uppercase">
        <NavLink to="/allFoods" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 rounded-none " : "text-white"
        }>All Foods</NavLink>
      </li>
      <li className="font-Oswald uppercase">
        <NavLink to="/gallery" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 rounded-none" : "text-white"
        }>Gallery</NavLink>
      </li>

      {user?.email && (
        <li className="font-Oswald uppercase">
          <NavLink to="/my-order" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 rounded-none" : "text-white"
        }>My Order</NavLink>
        </li>
      )}
      <li className="font-Oswald uppercase">
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 rounded-none" : "text-white"
        }>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-600 font-Oswald text-white dark:bg-gray-900 dark:text-gray-200 dark:border-b">
      <div className="navbar w-11/12 max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-green-500">
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
              className="menu menu-sm dropdown-content bg-green-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to='/' className="flex items-center gap-2 cursor-pointer">
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/3089/3089716.png" alt="" />
            <a className="text-xl cursor-pointer font-Oswald uppercase font-semibold">FoodKing</a>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost text-white dark:text-gray-300 bg-white/30 mr-2 hidden md:flex"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {user && user?.email ? (
            <div className="dropdown dropdown-end flex items-center gap-3">
              <div tabIndex={0} role="button" className="btn btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-green-600">
                  <img
                    alt="User Profile"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-box z-[50] mt-60 w-52 p-2 shadow"
              >
                <div className=" border-b px-4">
                  <div>
                    <h2 className="text-gray-700 dark:text-white pt-3 font-bold rounded-lg text-center text-md">
                      {user.displayName}
                    </h2>
                    <h2 className="text-gray-400 dark:text-white rounded-lg text-center text-xs mb-3">
                      {user.email}
                    </h2>
                  </div>
                </div>
                <li>
                  <Link to="/addFood" className="justify-between text-green-500 font-semibold">
                    Add Food
                  </Link>
                </li>

                <li className="font-semibold text-blue-500">
                  <Link to="/myFoods" className="justify-between text-green-500 font-semibold">
                    My Foods
                  </Link>
                </li>

                <li className="font-semibold text-blue-500">
                  <Link to="/my-order" className="justify-between text-green-500 font-semibold">
                    My Orders
                  </Link>
                </li>

                <li
                  onClick={() => {
                    if (window.confirm("Are you sure you want to log out?")) {
                      signOutUser();
                    }
                  }}
                  className="text-red-500 font-semibold"
                >
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-[#16A34A] py-2 px-5 md:px-7 border-white shadow-md hover:bg-[#fde047] hover:text-gray-600 text-white font-Oswald uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
