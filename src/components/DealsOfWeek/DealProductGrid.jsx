import React from "react";
import ProductCard from "./ProductCard";

const DealProductGrid = () => {
  return (
    <div className="w-full pr-4 mt-2">
      <div className="flex flex-row justify-between">
        <p className="font-medium text-[22px] mb-2">
          Daily Deals! Get our best prices
        </p>
        <div className="flex flex-row gap-10">
          <p className="font-medium text-[18px] text-amountColor">30% Offer</p>
          <p className="font-medium text-[18px] text-[#969696]">70% Offer</p>
          <p className="font-medium text-[18px] text-[#969696]">45% Offer</p>
        </div>
      </div>

      <div className="h-[1.5px] w-full bg-[#F5F5F5] mb-2">
        <div className="h-[2px] w-[40px] bg-amountColor ml-[505px] relative">
          <div className="border-redBg border-l-solid border-l-transparent border-r-solid border-r-transparent border-l-[8px] border-t-[8px] border-r-[8px] absolute left-3"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <ProductCard
            image="../public/images/main/deal2.png"
            title="Lotary Extension Arm"
            oldPrice="750.00"
            newPrice="700.00"
            className="deal-images1"
          />
          <ProductCard
            image="../public/images/main/deal1.png"
            title="Gheoi Terminus RF"
            oldPrice="590.00"
            newPrice="350.00"
            className="deal-images2"
          />
          <ProductCard
            image="../public/images/main/deal3.png"
            title="Kinlock Pins CWR"
            oldPrice="700.00"
            newPrice="556.00"
            className="deal-images3"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <ProductCard
            image="../public/images/main/deal4.png"
            title="Lotary Extension Arm"
            oldPrice="750.00"
            newPrice="700.00"
            className="deal-images1"
          />
          <ProductCard
            image="../public/images/main/deal5.png"
            title="Gheoi Terminus RF"
            oldPrice="590.00"
            newPrice="350.00"
            className="deal-images2"
          />
          <ProductCard
            image="../public/images/main/deal6.jpg"
            title="Kinlock Pins CWR"
            oldPrice="700.00"
            newPrice="556.00"
            className="deal-images3"
          />
        </div>
      </div>
    </div>
  );
};

export default DealProductGrid;
