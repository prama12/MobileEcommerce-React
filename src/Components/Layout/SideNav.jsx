import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ closeNav }) => {
  return (
    <>
      <div className=" px-5 w-full flex flex-col gap-1 bg-white">
        <ul
          id="sideNav"
          className=" py-5 w-full flex divide-y-2 flex-col gap-1"
        >
          <li className="w-full">
            <NavLink onClick={closeNav} className="navLink" to="/">
              <div className="py-3 px-2 bg-gray-50">Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav} className="navLink" to="/shop">
              <div className="py-3 px-2 bg-gray-50">Shop</div>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav} className="navLink" to="/aboutUs">
              <div className="py-3 px-2 bg-gray-50"> About Us</div>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav} className="navLink" to="/contact">
              <div className="py-3 px-2 text-white bg-gray-50 bg-purple-600">
                Contact
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="font-sans text-black bg-white items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              type="text"
              className="px-4 py-3 w-full"
              placeholder="Search..."
            />
            <button className="flex items-center justify-center px-4 border-l">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
