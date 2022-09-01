import React from "react";
import TableRowCart from "../Common/TableRowCart";
import Pdata from "../Products/Pdata";

const Cart = () => {
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

      {/* content */}
      <div className="w-padding max-w px-10 py-10">
        <div className="xl:w-11/12 w-full mx-auto ">
          <div className=" font-Poppins font-bold text-3xl text-[#0D1222] mb-10">
            Cart Products
          </div>
          <div className="w-full lg:grid grid-cols-12 gap-10">
            <div className="w-full col-span-8">
              <table className="w-full  ">
                {Pdata.map((val, index) => {
                  console.log(index);
                  return <TableRowCart key={val.id} {...val} />;
                })}
              </table>
            </div>

            <div className=" col-span-4">
              <div className="w-full bg-[#F4F4F4] px-5 py-5 flex flex-col gap-5 ">
                <div className=" text-[#0D1222]  sm:text-lg font-bold font-Mada">
                  Coupon Code
                </div>
                <input
                  className="bg-white px-4 w-full py-3 text-xl font-bold outline-none focus:outline-none"
                  type="text"
                  name=""
                />
                <div className="flex justify-end">
                  <button className="btn-withbg">Check</button>
                </div>

                <div className="w-full flex justify-between items-center mt-2 ">
                  <div className="flex flex-col gap-1 ">
                    <div className="text-[#0D1222]  sm:text-lg font-bold font-Mada">
                      Subtotal
                    </div>
                    <div className="text-[#969696]  sm:text-lg  font-Mada">
                      4 Product
                    </div>
                  </div>
                  <div className="text-[#0D1222] sm:text-lg  font-Mada">
                    $ 160 USD
                  </div>
                </div>

                <div className="w-full  border-b-2 border-[#969696] rounded-md"></div>

                <div className="w-full flex justify-between items-center mt-2 ">
                  <div className="flex flex-col gap-1 ">
                    <div className="text-[#0D1222]  sm:text-lg font-bold font-Mada">
                      Total
                    </div>
                  </div>
                  <div className="text-[#0D1222]  sm:text-lg  font-Mada">
                    $ 160 USD
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="btn-withbg">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
