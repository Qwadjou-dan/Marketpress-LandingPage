import React from "react";

const ProductCard = ({ image, title, oldPrice, newPrice, className }) => {
  return (
    <div
      className={`w-fit p-7 mt-8 flex flex-col justify-center items-center ${className}`}
    >
      <img src={image} alt={title} className="w-48 h-48" />
      <p className="text-[16px] font-medium">{title}</p>
      <p className="text-[18px] text-amountColor text-medium">
        <del className="text-[#E9E9E9]">&pound;{oldPrice}</del> &pound;
        {newPrice}
      </p>
    </div>
  );
};

export default ProductCard;
