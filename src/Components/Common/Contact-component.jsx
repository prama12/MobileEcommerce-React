import React from "react";

const ContactComponent = ({ svg, title, content, content2 }) => {
  return (
    <>
      <div className="p-10 lg:w-[485px] bg-white shadow-2xl rounded flex flex-col gap-3 sm:h-[268px]">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5463FF]">
          {svg}
        </div>
        <div className=" font-Mada font-bold  text-[#0D1222] text-2xl">
          {title}
        </div>
        <div className="flex flex-col gap-2">
          <div className=" font-Poppins font-normal text-[#969696] text-lg ">
            {content}
          </div>
          <div className=" font-Poppins font-normal  text-[#969696] text-lg ">
            {content2}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
