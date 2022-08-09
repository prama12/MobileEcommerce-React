import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-[#393E46] sm:px-16 py-14 px-5">
        <div className="md:grid md:grid-cols-12 max-w gap-6 md:gap-16 w-full text-white flex flex-col">
          <div className=" md:col-span-5 flex flex-col gap-5">
            <NavLink to="/" className="flex gap-1 items-center">
              <div>
                <svg
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.0463 0H0.214311C0.0960349 0 0 0.0964564 0 0.215448V33.7193C0 33.8383 0.0960349 33.9347 0.214311 33.9347H35.0463C35.1646 33.9347 35.26 33.8383 35.26 33.7193V0.215448C35.26 0.0964564 35.1646 0 35.0463 0Z"
                    fill="#0EC5D7"
                  />
                  <path
                    d="M9.31909 7.46802V26.4666"
                    stroke="white"
                    stroke-width="3.08178"
                  />
                  <path
                    d="M15.012 7.46802V16.9314"
                    stroke="white"
                    stroke-width="3.07593"
                  />
                  <path
                    d="M19.3489 7.46875V10.6831H24.7813L28.722 18.826H32.2703L26.6349 7.46875H19.3489Z"
                    fill="white"
                  />
                  <path
                    d="M20.9629 14.1665V26.8438"
                    stroke="white"
                    stroke-width="3.56014"
                  />
                </svg>
              </div>
              <div className="font-Roboto font-bold text-sm text-white hover:text-gray-100">
                Online Mobile Store
              </div>
            </NavLink>
            <div className="text-white text-xs sm:text-sm font-Poppins text-justify font-light ">
              In the following tutorial you will learn to create a gummy text
              effect. Perfect for illustrative designs, you will create a cute
              and fun lettering effect using the Offset Path function and
              various other coloring techniques.
            </div>

            <div>
              <NavLink to="/login">
                <button className="btn">
                  <div className=" bg-white">
                    <div className="gradient-text">Login</div>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
          <div className=" md:col-span-7 lg:grid w-full lg:grid-cols-12 flex flex-col gap-5 text-xs font-thin">
            <div className="lg:col-span-8 grid grid-cols-3 w-full ">
              <div className="flex flex-col gap-3">
                <h1 className="footer-main">Home</h1>
                <div className="flex flex-col gap-1">
                  <NavLink to="">
                    <p className="footer-para">Product</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">category</p>
                  </NavLink>
                  <NavLink to="/shop">
                    <p className="footer-para">Shop</p>
                  </NavLink>
                  <NavLink to="/login">
                    <p className="footer-para">Log in</p>
                  </NavLink>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="footer-main">Shop</h1>
                <div className="flex flex-col gap-1">
                  <NavLink to="">
                    <p className="footer-para">T-Shirt</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">Jacket</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">Shirt</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">Jens</p>
                  </NavLink>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="footer-main">Categories</h1>
                <div className="flex flex-col gap-1">
                  <NavLink to="">
                    <p className="footer-para">Men</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">Children</p>
                  </NavLink>
                  <NavLink to="">
                    <p className="footer-para">Woman</p>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 w-full flex flex-col gap-3">
              <h1 className="footer-main">Contact</h1>
              <div className="flex flex-col gap-3">
                <p>
                  <a href="" target="_blank" className="footer-para">
                    mangcoding@gmail.com
                  </a>
                </p>
                <ul className="flex gap-3">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="border-2 px-2 py-1 rounded text-sm    text-white hover:bg-blue-600 hover:border-blue-600 animation"
                    >
                      <i className="fa-brands fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="border-2 px-2 py-1 rounded text-sm text-white hover:bg-white hover:text-blue-600 hover:border-white animation   "
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="border-2 px-2 py-1 rounded text-sm    text-white hover:bg-blue-600 hover:border-blue-600 animation"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="border-2 px-2 py-1 rounded text-sm    text-white bg-gradient-to-r from-[#393E46] to-[#393E46]  transition-all duration-500 ease-in-out hover:from-pink-500 hover:to-yellow-200"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
