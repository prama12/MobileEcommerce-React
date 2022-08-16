import React from "react";
import Card from "../Common/Card";
import CategoryItem from "../Common/CategoryItem";
import Category from "../Products/CategoryItemDetails";
import Pdata from "../Products/Pdata"

const Shop = () => {
  return (
    <>
      {/* hero section  */}
      <div className="w-full h-fit hero-gradient pt-5">
        <div className="w-full max-w w-padding relative">
          <div className="w-full grid sm:grid-cols-2 gap-y-10 ">
            <div className="w-full flex">
              <div className=" font-Mada font-bold text-white text-4xl">
                Cart
              </div>
            </div>
            <div className=" relative w-full sm:px-5 mx-auto flex justify-center items-center py-3 overflow-hidden ">
              <div className=" w-full sm:w-11/12 overflow-hidden overflow-x-scroll no-scrollbar flex gap-4 lg:gap-10   ">
                {Category.map((val, index) => {
                  console.log(index);
                  return <CategoryItem key={val.id} {...val} />;
                })}
              </div>
              <div className=" absolute left-0">
                <div className="w-5 h-5 bg-white shadow hover:bg-slate-50 hover:scale-105 duration-300 ease-in-out cursor-pointer flex justify-center items-center">
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.71484 1.37505L1.37484 6.71505L6.71484 12.0551"
                      stroke="#5463FF"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className=" absolute right-0">
                <div className="w-5 h-5 bg-white shadow hover:bg-slate-50 hover:scale-105 duration-300 ease-in-out cursor-pointer flex justify-center items-center">
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.28516 1.37505L6.62516 6.71505L1.28516 12.0551"
                      stroke="#5463FF"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shop content  */}

      <div className="w-full w-padding max-w">
        <div className="text-2xl font-Mada text-black pb-5 font-bold">
          T-shirt
        </div>
        <div className="w-full grid grid-cols-12 gap-0.5 bg-white  py-2">
          <div className="col-span-3 bg-red-500 px-10 py-14"></div>
          <div className="col-span-9 grid grid-cols-3 gap-4 px-10 py-14">
           {
             Pdata.map((val,index)=>{
               return <Card key={val.id} {...val} />
             })
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
