import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ img, name, dec, price }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
        className="w-full h-fit overflow-hidden shadow-xl cursor-default hover:shadow-2xl rounded-lg relative animation animation"
      >
        <div className=" relative cursor-pointer">
          <NavLink to="/home/itemDetails">
            <img className="w-full" src={img} alt="" />
          </NavLink>

          {/* show on hover  */}
          {show ? (
            <div className=" w-full cursor-default px-4 py-3 bg-[#00000080] bottom-0 absolute  backdrop-blur-sm flex gap-4 items-center justify-end animation  ">
              <div className=" border border-white w-9 h-9 flex items-center justify-center  p-1">
                <svg
                  onClick={() => setActive(!active)}
                  className="w-6 cursor-pointer border-white"
                  viewBox="0 0 17 19"
                  fill={active ? "#a744ff" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5898 17.54L8.97984 13.15L3.36984 17.54C2.64984 18.11 1.58984 17.59 1.58984 16.67V2.80001C1.58984 1.58001 2.57984 0.600006 3.78984 0.600006H14.1598C15.3798 0.600006 16.3598 1.59001 16.3598 2.80001V16.67C16.3698 17.59 15.3198 18.11 14.5898 17.54Z"
                    stroke={active ? "#a744ff" : "white"}
                    strokeWidth="1.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="border w-9 h-9 flex items-center justify-center border-white p-1 ">
                <svg
                  onClick={() => setActive1(!active1)}
                  className="h-6 cursor-pointer"
                  viewBox="0 0 22 20"
                  fill={active1 ? "red" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7549 1C13.6629 1 11.8539 2.27953 11.005 4.11493C10.1561 2.27953 8.35724 1 6.25517 1C3.35472 1 1 3.4437 1 6.45375C1 10.7643 7.04345 16.2915 9.73167 18.5359C10.4795 19.1547 11.5306 19.1547 12.2683 18.5359C14.9666 16.281 21 10.7538 21 6.45375C21.0101 3.4437 18.6554 1 15.7549 1Z"
                    stroke={active1 ? "red" : "white"}
                    strokeWidth="1.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
        <div className="px-5 py-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className=" text-[#0D1222] font-bold text-sm font-Poppins ">
              {name}
            </div>
            <div className=" text-[#0D1222] font-bold text-lg font-Signika">
              {price}
            </div>
          </div>
          <div className="text-sm font-Poppins text-[#969696]">{dec}</div>
          <div className="flex items-center gap-2">
            <ul className="flex items-center">
              <li>
                <svg
                  ariaHidden="true"
                  focusable="false"
                  dataPrefix="fas"
                  dataIcon="star"
                  className="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  ariaHidden="true"
                  focusable="false"
                  dataPrefix="fas"
                  dataIcon="star"
                  className="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  ariaHidden="true"
                  focusable="false"
                  dataPrefix="fas"
                  dataIcon="star"
                  className="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  ariaHidden="true"
                  focusable="false"
                  dataPrefix="far"
                  dataIcon="star"
                  className="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  ariaHidden="true"
                  focusable="false"
                  dataPrefix="far"
                  dataIcon="star"
                  className="w-4 text-yellow-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                  ></path>
                </svg>
              </li>
            </ul>
            <div className="text-sm font-Signika text-[#969696]">( 1k )</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
