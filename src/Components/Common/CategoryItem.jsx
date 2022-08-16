import React from "react";

const CategoryItem = ({ img, title }) => {
  return (
    <>
      <div className="category1">
        <div className="category">
          <img
            className=" w-14 inline-block hover:scale-125  ease-out duration-300 "
            src={img}
            alt=""
          />
        </div>
        <div className="category-text "> {title}</div>
      </div>
    </>
  );
};

export default CategoryItem;
