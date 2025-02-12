import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)

  const links = (
    <>
      <li className="font-Oswald uppercase">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="font-Oswald uppercase">
        <NavLink to="/allFoods">All Foods</NavLink>
      </li>
      <li className="font-Oswald uppercase">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>

      {user?.email &&
        <li className="font-Oswald uppercase">
          <NavLink to="/myFoods">My Food</NavLink>
        </li> 
      }
      
    </>
  );

  return (
    <div className="bg-green-600 font-Oswald text-white ">
      <div className="navbar w-11/12 mx-auto">
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
            <a className="  text-xl cursor-pointer font-Oswald uppercase font-semibold">
            FoodKing
          </a>
          </Link>
          
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user && user?.email ? (
            <div className="dropdown dropdown-end flex items-center gap-3">
              <div
                tabIndex={0}
                role="button"
                className="btn  btn-circle avatar "
              >
                <div className="w-10 rounded-full border-2 border-green-600">
                  <img
                    alt="User Profile"
                    // src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-56 w-52 p-2 shadow"
              >
                <div className=" border-b px-4 ">
                  <div>
                    <h2 className="text-orange-400 pt-3 font-bold rounded-lg text-center text-md  ">
                      {user.displayName}
                    </h2>
                    <h2 className="text-orange-400   rounded-lg text-center text-xs mb-3  ">
                      {user.email}
                    </h2>
                  </div>
                </div>
                <li>
                  <Link
                    to="/addFood"
                    className="justify-between text-green-500  font-semibold"
                  >
                    Add Food
                    
                  </Link>
                </li>

                <li className="font-semibold text-blue-500">
                  <Link
                      to="/myFoods"
                      className="justify-between text-green-500  font-semibold"
                    >
                      My Foods
                      
                  </Link>
                </li>

                <li className="font-semibold text-blue-500">
                  <Link
                      to="/my-order"
                      className="justify-between text-green-500  font-semibold"
                    >
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
            className="btn bg-[#D12525] py-2 px-7 hover:bg-green-700 text-white font-Oswald uppercase"
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
