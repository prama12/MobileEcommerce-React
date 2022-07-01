import React from "react";

const Contact = () => {
  return (
    <>
      {/* hero section  */}
      <div className="w-full h-fit hero-gradient">
        <div className="w-full max-w w-padding relative">
          <div className="w-full grid sm:grid-cols-2 mb-32 ">
            <div className="w-full flex flex-col gap-7">
              <div className=" font-Mada font-bold text-white text-4xl">
                Contact
              </div>
              <div className=" font-Poppins text-[#F4F4F4] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </div>
            </div>
          </div>
          <div className=" absolute -bottom-32 left-[10%] flex gap-10 items-center justify-center">
            <div className="p-10 w-[485px] bg-white shadow-2xl rounded flex flex-col gap-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600">
                <svg
                  width="14"
                  height="23"
                  viewBox="0 0 14 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0.199951C10.88 0.199951 14 3.35995 14 7.23995C14 13.96 7 22.76 7 22.76C7 22.76 0 13.96 0 7.23995C0 3.35995 3.12 0.199951 7 0.199951ZM7 10.68C8.84 10.68 10.32 9.19995 10.32 7.35995C10.32 5.51995 8.84 3.99995 7 3.99995C5.16 3.99995 3.68 5.51995 3.68 7.35995C3.68 9.19995 5.16 10.68 7 10.68Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className=" font-Mada font-bold text-[#0D1222] text-2xl">
                Location
              </div>
              <div className=" font-Poppins text-[#969696] text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam.
              </div>
            </div>
            <div className="p-10 w-[485px] bg-white shadow-2xl rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
