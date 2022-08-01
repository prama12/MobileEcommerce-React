import React from "react";

const MyProfile = () => {
  return (
    <>
      {/* hero  */}
      <div className=" w-full h-fit hero-gradient ">
        <div className="w-full relative py-8 mb-20 max-w">
          <div className="w-full max-w w-padding relative">
            <div className="w-full grid sm:grid-cols-2 mb-5 gap-y-5 ">
              <div className="w-full flex flex-col gap-7">
                <div className=" font-Mada font-bold text-white text-4xl">
                  My Account
                </div>
                <div className=" font-Poppins text-[#F4F4F4] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                  finibus ullamcorper.
                </div>
              </div>
              <div className="flex xl:hidden xl:absolute bottom-0 right-20 justify-center rounded-sm shadow-md w-full  xl:w-[486px] xl:h-[407px] bg-white mx-auto py-5 flex-col items-center gap-5">
                <div className=" rounded-full w-[150px] h-[150px] overflow-hidden ">
                  <img className="h-full w-full" src="Images/profile.png" />
                </div>
                <div className=" font-Poppins font-bold text-xl sm:text-2xl text-[#0D1222]">
                  Alexanderdrostact12
                </div>
                <div className=" text-[#969696] text-xs sm:text-sm font-Poppins mb-5">
                  Alexanderrostact567@gmail.com
                </div>
                <div>
                  <button className="btn-withbg">Update</button>
                </div>
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
          <div className="hidden xl:flex xl:absolute -bottom-32 rounded-sm shadow-md right-20 justify-center w-[486px] h-[407px] bg-white mx-auto py-5 flex-col items-center gap-5 max-w">
            <div className=" rounded-full w-[150px] h-[150px] overflow-hidden ">
              <img className="h-full w-full" src="Images/profile.png" />
            </div>
            <div className=" font-Poppins font-bold text-xl sm:text-2xl text-[#0D1222]">
              Alexanderdrostact12
            </div>
            <div className=" text-[#969696] text-xs sm:text-sm font-Poppins mb-5">
              Alexanderrostact567@gmail.com
            </div>
            <div>
              <button className="btn-withbg">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
