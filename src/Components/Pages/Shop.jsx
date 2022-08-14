import React from "react";

const Shop = () => {
  return (
    <>
      {/* hero section  */}
      <div className="w-full h-fit hero-gradient pt-5">
        <div className="w-full max-w w-padding relative">
          <div className="w-full grid sm:grid-cols-2 xl:mb-32 mb-5 ">
            <div className="w-full flex flex-col gap-7">
              <div className=" font-Mada font-bold text-white text-4xl">
                Cart
              </div>
              <div className=" font-Poppins text-[#F4F4F4] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
