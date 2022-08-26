import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../Common/Card";
import Rating from "../Common/Rating";
import Testimonials from "../Common/Testimonials";
import Item from "../Products/CardItem";

const Home = () => {
  const [tab, setTab] = useState(1);

  const tabToggle = (index) => {
    setTab(index);
  };

  return (
    <>
      {/* hero section  */}
      <div className="hero-gradient w-full h-fit">
        <div className="w-full max-w w-padding">
          <div className="flex flex-col gap-y-10  md:grid grid-cols-12 gap-5 items-center">
            <div className=" w-full col-span-8">
              <div className="w-full grid grid-cols-12 gap-3">
                <div className="col-span-8 w-full flex flex-col gap-5 sm:gap-10 text-white">
                  <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Mada font-bold">
                    Get the Latest Dress Models From Us
                  </div>
                  <div className=" text-xs  sm:text-sm md:text-lg font-Poppins text-[#DDDDDD]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                    finibus ullamcorper.
                  </div>
                  <NavLink to="/shop">
                    <button className="btn">
                      <div className=" bg-white">
                        <div className="gradient-text">Shop Now</div>
                      </div>
                    </button>
                  </NavLink>
                </div>
                <div className="col-span-4 w-full">
                  <div className="flex flex-col gap-5 w-full justify-center items-center">
                    <div className="text-base md:text-lg font-Poppins font-bold text-white">
                      More List
                    </div>
                    <div className="flex flex-col gap-10 h-60 overflow-y-scroll no-scrollbar pt-14">
                      <div>
                        <img src="Images/about1.png" alt="" />
                      </div>
                      <div>
                        <img src="Images/about1.png" alt="" />
                      </div>
                      <div>
                        <img src="Images/about1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full col-span-4 justify-center items-center">
              <div className="border-4 border-white rounded-t-3xl rounded-r-3xl overflow-hidden">
                <img className="w-full" src="Images/hero-img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home contain  */}
      <div className="w-padding max-w">
        <div className="w-full flex justify-center items-center flex-col gap-5 py-10">
          <div className=" font-Poppins text-lg text-center text-[#5463FF] ">
            CHOOSE FROM THE BEST PRODUCTS
          </div>
          <div className="w-full text-[#0D1222] text-3xl sm:text-4xl md:text-5xl font-Mada font-bold text-center ">
            Our Best Seller Product
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-y-3 gap-5 md:gap-10 ">
            <div
              className={tab === 1 ? "active-tabs" : "tab"}
              onClick={() => tabToggle(1)}
            >
              Mobile
            </div>
            <div
              className={tab === 2 ? "active-tabs" : "tab"}
              onClick={() => tabToggle(2)}
            >
              Headphone
            </div>
            <div
              className={tab === 3 ? "active-tabs" : "tab"}
              onClick={() => tabToggle(3)}
            >
              EarPhone
            </div>
            <div
              className={tab === 4 ? "active-tabs" : "tab"}
              onClick={() => tabToggle(4)}
            >
              Charger
            </div>
          </div>
        </div>
        {/* cards  */}
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-5">
          {Item.map((val, index) => {
            console.log(index);
            return <Card key={val.id} {...val} />;
          })}
        </div>
      </div>

      <div className="hero-gradient w-full h-fit">
        <div className="w-full max-w w-padding">
          <div className="md:grid grid-cols-12 gap-10 w-full  ">
            <div className=" relative flex col-span-7 w-full justify-end  sm:spx-10 md:px-0 xl:px-10 ">
              <div className=" absolute w-32 sm:w-40 lg:w-52 md:-left-5 left-0 ">
                <img className="" src="/Images/cover.png" alt="" />
                <div className="">
                  <img src="/Images/elipes.png" alt="" />
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <div className=" shadow hover:shadow-xl  flex justify-center items-center w-5 h-5 md:w-10 md:h-10 bg-white ">
                  <svg
                    className=" w-7  h-4 "
                    viewBox="0 0 12 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3442 1.99998L1.80024 10.544L10.3442 19.088"
                      stroke="#5463FF"
                      strokeWidth="2.4"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className=" w-40 sm:w-48 md:w-60 ">
                  <img className="" src="/Images/cover.png" alt="" />
                  <div className="">
                    <img src="/Images/elipes.png" alt="" />
                  </div>
                </div>
                <div className="shadow hover:shadow-xl  flex justify-center items-center w-5 h-5 md:w-10 md:h-10 bg-white ">
                  <svg
                    className=" w-7  h-4 "
                    viewBox="0 0 12 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.65576 1.99998L10.1998 10.544L1.65576 19.088"
                      stroke="#5463FF"
                      strokeWidth="2.4"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" col-span-5 py-10 text-white flex flex-col gap-10 ">
              <div className=" font-Mada text-3xl   sm:text-4xl md:text-5xl  text-center md:text-left font-bold">
                The Oblongers T-Shirt
              </div>
              <div className=" flex justify-between items-center ">
                <div className=" flex gap-2 items-center">
                  <Rating />
                  <div className=" font-Poppins text-sm text-[#DDDDDD] ">
                    ( 20k )
                  </div>
                </div>
                <div className=" font-Poppins text-3xl md:text-[40px] font-bold">
                  50$
                </div>
              </div>

              <div className="font-Poppins text-xs sm:text-sm text-[#DDDDDD] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
                vel tempor dolor augue et lectus. Proin et lacus blandit quam
                semper placerat.
              </div>

              <div className=" flex md:w-fit justify-center ">
                <div className="w-fit rounded  bg-white">
                  <button className="btn gradient-text ">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials  */}
      <div className="w-full relative w-padding max-w flex flex-col gap-10 ">
        <div className="text-center font-Mada font-bold text-[40px] text-[#0D1222]">
          Testimonials
        </div>
        <div className=" w-full grid sm:grid-cols-2 gap-10 ">
          <Testimonials img="/Images/Profile.png" name="Bijay" />
          <Testimonials img="/Images/Profile2.png" name="Prama" />
        </div>


        <div className="flex item justify-center gap-11 grid-cols-6"></div>
      </div>
    </>
  );
};

export default Home;
