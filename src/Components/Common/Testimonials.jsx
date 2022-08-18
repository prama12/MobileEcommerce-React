import React from "react";
import Rating from "./Rating";

const Testimonials = ({ img, name }) => {
  return (
    <>
      <div className=" w-full relative rounded shadow-lg px-5 py-10 flex gap-8 flex-col ">
        <div className=" absolute top-0 right-0">
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M78 0V78L0 0H78Z" fill="#F4F4F4" />
          </svg>
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className=" font-Poppins font-bold text-lg ">{name}</div>
            <div className=" font-Poppins text-sm text-[#969696] ">Client</div>
          </div>
        </div>

        <Rating />

        <div className=" text-sm sm:text-base md:text-lg font-Poppins text-[#646464]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
          dapibus luctus. “
        </div>
      </div>
    </>
  );
};

export default Testimonials;
