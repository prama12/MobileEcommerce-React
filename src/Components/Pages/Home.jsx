import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Common/Card";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <div className="hero-gradient w-full h-fit">
        <div className="w-full max-w w-padding">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className=" w-full col-span-8">
              <div className="w-full grid grid-cols-12 gap-3">
                <div className="col-span-8 w-full flex flex-col gap-10 text-white">
                  <div className="text-5xl font-Mada font-bold">
                    {" "}
                    Get the Latest Dress Models From Us
                  </div>
                  <div className=" text-lg font-Poppins text-[#DDDDDD]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                    finibus ullamcorper.
                  </div>
                  <NavLink to="/shop">
                    <button className="btn btn-text">Shop Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="w-full col-span-4 justify-center items-center">
              <div className="border-4 border-white rounded-t-3xl rounded-r-3xl overflow-hidden">
                <img src="Images/hero-img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* home contain  */}
      <div className="w-padding max-w">
        {/* cards  */}
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
