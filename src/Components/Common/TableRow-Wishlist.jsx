import React from "react";

const TableRowWishlist = ({ img, name, color, price, stock }) => {
  return (
    <>
      <tr className="relative flex flex-wrap gap-5 md:gap-10 xl:gap-16 justify-center items-center bg-[#F4F4F4] px-6 py-5 w-full mb-5">
        <td className=" md:relative absolute top-1 right-1 xsm:top-2 xsm:right-2 sm:top-4 sm:right-4 md:top-0 md:right-0  text-xl hover:text-red-700 cursor-pointer ">
          <svg
            className="w-4 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0Zm-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5H17.5Zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676l1.983 23.647ZM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0v-14.5ZM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25Z"
            />
          </svg>
        </td>
        <td className="w-20 h-20 bg-white hover:shadow-sm cursor-pointer overflow-hidden">
          <img className="w-full h-full" src={img} alt="" />
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
