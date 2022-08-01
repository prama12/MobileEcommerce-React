import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* hero  */}
      <div className=" w-full h-fit hero-gradient ">
        <div className="w-full relative py-8 mb-20 max-w">
          <div className="w-full max-w w-padding relative">
            <div className="w-full grid sm:grid-cols-2 mb-5 ">
              <div className="w-full flex flex-col gap-7">
                <div className=" font-Mada font-bold text-white text-4xl">
                  About Us
                </div>
                <div className=" font-Poppins text-[#F4F4F4] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                  finibus ullamcorper.
                </div>
              </div>
              <div className="hidden sm:flex xl:hidden  xl:absolute bottom-0 right-20">
                <img src="Images/aboutUs.png" />
              </div>
            </div>
          </div>

          <svg
            className="hidden md:flex absolute -bottom-10 2xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              fill-opacity="1"
              d="M0,256L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="hidden xl:flex  xl:absolute bottom-0 2xl:-bottom-10 right-20">
            <img src="Images/aboutUs.png" />
          </div>
        </div>
      </div>
      {/* content  */}

      <div className=" w-full w-padding max-w flex flex-col gap-10">
        <div className="w-full grid md:grid-cols-2 gap-y-10  ">
          <div className="flex flex-col gap-7 pr-10">
            <div className=" font-Mada text-3xl md:text-[40px] text-[#0D1222] font-bold">
              Profile
            </div>
            <div className=" font-Poppins text-base text-[#646464] md:text-lg flex flex-col gap-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
              <p>
                Klara is an AI powered automated Solution Builder of Growth
                Strategy, Branding and Digital marketing planning for your
                business.
              </p>
            </div>
          </div>
          <div className=" relative">
            <img className=" h-full w-full " src="Images/about1.png" />
            <div className=" absolute left-7 text-left bg-white w-full px-5 py-2  bottom-7 ">
              <div className="gradient-text font-Mada font-bold text-2xl">
                Mangcoding Store
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-y-10">
          <div className=" relative">
            <img className=" h-full w-full " src="Images/about2.png" />
            <div className=" absolute right-7 text-right bg-white w-full px-5 py-2  bottom-7 ">
              <div className="gradient-text font-Mada font-bold text-2xl">
                Mangcoding Store
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 pl-10">
            <div className=" font-Mada text-3xl md:text-[40px] text-[#0D1222] font-bold">
              Our Mission
            </div>
            <div className=" font-Poppins text-base text-[#646464] md:text-lg flex flex-col gap-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
              <p>
                Klara is an AI powered automated Solution Builder of Growth
                Strategy, Branding and Digital marketing planning for your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
