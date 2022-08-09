import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-login px-5 sm:px-16 py-8">
        <div className="md:grid grid-cols-2 gap-5 w-full max-w">
          <div>
            <h1 className="text-white text-2xl font-bold mb-8">My Account</h1>
            <h2 className="text-white text-lg font-bold mb-5">Sign Up</h2>
            <p className="font-thin text-white text-xs mb-3">
              You have account?
              <span className="font-semibold cursor-pointer hover:text-gray-100">
                <NavLink to="/login">Login</NavLink>
              </span>
            </p>
            <div className="mb-6 flex gap-7">
              <button className="bg-white text-black text-xs font-semibold hover:bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-sm ">
                <img src="Images/google.png" />
                Google
              </button>
              <button className="bg-white text-black text-xs font-semibold hover:bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-sm">
                <img src="Images/facebook-along.png" />
                Facebook
              </button>
            </div>
            <div className="flex flex-col">
              <div className="gap-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <div className="">
                  <label
                    className="block  text-sm font-bold mb-2 text-white"
                    for="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow-sm  border rounded-sm w-full py-2 px-3 focus:outline-none "
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <label
                    className="block  text-sm font-bold mb-2 text-white"
                    for="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow-sm  border rounded-sm w-full py-2 px-3 focus:outline-none "
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2 text-white"
                  for="email"
                >
                  Email
                </label>

                <input
                  className=" shadow-sm  border rounded-sm w-full py-2 px-3 focus:outline-none "
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <div className=" relative">
                  <input
                    className=" shadow appearance-none border border-red rounded-sm w-full py-2 px-3 focus:outline-none  mb-3"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />

                  <div
                    className=" absolute top-[26%] right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 16 16"
                        >
                          <g fill="currentColor">
                            <path d="m10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12l.708-.708l12 12l-.708.708z" />
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 16 16"
                        >
                          <g fill="currentColor">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <label
                  className="block text-white text-sm font-bold mb-2 "
                  for="password"
                >
                  Re-Password
                </label>
                <input
                  className="shadow appearance-none border border-red rounded-sm w-full py-2 px-3 focus:outline-none  mb-3"
                  id="password"
                  type="password"
                  placeholder="Password Again"
                />
              </div>
              <div className="flex items-center mb-6">
                <div class="form-check text-xs flex items-center">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-white"
                    for="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <NavLink to="/login">
                  <button className="btn">
                    <div className=" bg-white">
                      <div className="gradient-text">Sign Up</div>
                    </div>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
