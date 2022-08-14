import React from "react";
import CategoryItem from "../Common/CategoryItem";
import Category from "../Products/CategoryItemDetails";

const Shop = () => {
  return (
    <>
      {/* hero section  */}
      <div className="w-full h-fit hero-gradient pt-5">
        <div className="w-full max-w w-padding relative">
          <div className="w-full grid sm:grid-cols-2 m-10 ">
            <div className="w-full flex">
              <div className=" font-Mada font-bold text-white text-4xl">
                Cart
              </div>
            </div>
            <div className="w-full px-5">
              <div className="w-11/12 overflow-hidden flex gap-10 overflow-x-scroll no-scrollbar  ">
                {Category.map((val, index) => {
                  console.log(index);
                  return <CategoryItem key={val.id} {...val} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
