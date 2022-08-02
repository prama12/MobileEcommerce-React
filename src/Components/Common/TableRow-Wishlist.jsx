import React from "react";

const TableRowWishlist = ({ img, name, color, price, stock }) => {
  return (
    <>
      <tr className="relative flex flex-wrap gap-5 md:gap-10 xl:gap-16 justify-center items-center bg-[#F4F4F4] px-6 py-5 w-full mb-5">
        <td className=" md:relative absolute top-1 right-1 xsm:top-2 xsm:right-2 sm:top-4 sm:right-4 md:top-0 md:right-0  text-xl hover:text-red-700 cursor-pointer ">
          <svg
            className="w-4 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            ariaHidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="M11.5 6h5a2.5 2.5 0 0 0-5 0ZM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5H10Zm2.5 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm3.75-.75a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75Z"
            />
          </svg>
        </td>
        <td className="w-20 h-20 bg-white hover:shadow-sm cursor-pointer overflow-hidden">
          <img className="w-full h-full" src={img} />
        </td>
        <td className="flex flex-shrink-0 flex-col text-center xsm:text-left  xsm:gap-2 ">
          <div className=" font-Mada font-bold text-xl sm:text-2xl text-[#0D1222]">
            {name}
          </div>
          <div className=" font-Mada sm:text-lg text-[#969696]">
            Color : <span className=" capitalize">{color}</span>
          </div>
        </td>

        <td className="flex flex-shrink-0 flex-col text-center xsm:text-left  xsm:gap-2">
          <div className=" font-Mada font-bold text-xl sm:text-2xl text-[#0D1222]">
            {price}
          </div>
          <div className=" font-Mada sm:text-lg text-[#969696]">Price</div>
        </td>

        <td className="flex flex-shrink-0 flex-col text-center xsm:text-left  xsm:gap-2">
          <div className=" font-Mada font-bold text-xl sm:text-2xl text-[#0D1222]">
            {stock}
          </div>
          <div className=" font-Mada sm:text-lg text-[#969696]">In Stock</div>
        </td>
        <td className="flex ">
          <button className="btn-withbg">Add To Cart</button>
        </td>
      </tr>
    </>
  );
};

export default TableRowWishlist;
