import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Navlinkdata from "./SideNav";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      {/* <nav onClick={() => Close()} className={click ? "side-Nav" : "main-Nav"}>
        <div
          className={
            click
              ? "relative w-full max-w flex flex-col gap-10"
              : "relative w-full max-w flex items-center justify-between"
          }
        >
          <NavLink
            to="/"
            className="flex flex-wrap gap-1 items-center text-base font-bold hover:text-black text-gray-600 cursor-pointer"
          >
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
            <div className=" font-Roboto">Online Mobile Store</div>
          </NavLink>

          <div
            className={
              click
                ? "flex flex-col divide-y gap-6 px-5 text-xs font-semibold"
                : " flex  gap-6 items-center text-xs font-semibold"
            }
          >
            <ul
              className={
                click
                  ? " w-full flex flex-col gap-5 divide-y bg-white"
                  : " hidden lg:flex items-center justify-center gap-6  text-gray-800"
              }
            >
              {Navlinkdata.map((item, index) => {
                return (
                  <li
                    onClick={click ? handleClick : null}
                    key={index}
                    className={item.cName}
                  >
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>

            <ul
              className={
                click
                  ? "flex pt-5  gap-5 items-start xsm:hidden "
                  : "  items-center gap-6 hidden xsm:flex "
              }
            >
              <li>
                <NavLink onClick={Close} to="/addtocart" className="linklist">
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    ariaHidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 6h19l-3 10H6L3 6Zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Close} to="/wishlist" className="linklist">
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    ariaHidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Close} to="/myProfile" className="linklist">
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    ariaHidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>

            {/* search item  */}
      {/* <div
              className={
                click
                  ? "font-sans flex md:hidden text-black bg-white w-full  "
                  : "font-sans hidden md:flex text-black bg-white  items-center justify-center"
              }
            >
              <div className="border rounded w-full overflow-hidden flex">
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
            </div> */}

      {/* menu and close  */}

      {/* <ul
              className={
                click
                  ? " absolute top-1 right-0 flex lg:hidden "
                  : "flex lg:hidden"
              }
            >
              {click ? (
                <li onClick={Close} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="currentColor"
                      d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
                    />
                  </svg>
                </li>
              ) : (
                <li onClick={handleClick} className="cursor-pointer">
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                    />
                  </svg>
                </li>
              )}
            </ul> */}
      {/* </div>
        </div>
      </nav> */}

      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink
              to="/"
              className="flex flex-wrap gap-1 items-center text-base font-bold hover:text-black text-gray-600 cursor-pointer"
            >
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
              <div className=" font-Roboto">Online Mobile Store</div>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/aboutUs"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/shop"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
