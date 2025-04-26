import React from "react";

const FeaturedDeal = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-[170px] justify-between border rounded-t-lg bg-[#EA1B25] px-5 pt-5 pb-10">
        <p className="text-white font-medium text-nowrap">Deals of the week</p>
        <div className="flex flex-row">
          <img
            src="../public/images/main/back.png"
            alt="back arrow"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src="../public/images/main/forward.png"
            alt="back arrow"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      <div className="border-2 border-[#EA1B25] rounded-b-lg mt-[-2px] px-[17px] py-3 flex flex-col items-center gap-2 deal-images1">
        <div>
          <img
            src="../public/images/main/deal1.png"
            alt="image1"
            className="w-[250px] h-[250px]"
          />
        </div>
        <p className="font-bold">Gheoi Terminus RF</p>
        <p className="text-[25px] text-amountColor">
          <del className="text-[#E9E9E9]">&pound;590.00</del> &pound;350.00
        </p>
        <div className="flex flex-row gap-4 text-[12px]">
          <p>Already Sold:4</p>
          <p>Available:36</p>
          <div className="border-none w-20 h-20 rounded-full flex flex-col justify-center items-center bg-[#EA1B25]">
            <p className="text-[20px] font-bold  text-white">40%</p>
            <p className="font-normal text-[14px] text-white">Offer</p>
          </div>
        </div>
        <div className="h-2 w-[260px] rounded-lg bg-[#F5F5F5] mb-5"></div>
        <div className="h-0.5 w-[340px] bg-[#F5F5F5] mb-2"></div>
        <p className="font-bold text-[24px] mb-4">
          Hurry Up! <span className="text-amountColor">Offers end in:</span>
        </p>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col items-center gap-1">
            <p className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5]">
              0
            </p>
            <p className="text-[10px] font-light">DAYS</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5]">
              00
            </p>
            <p className="text-[10px] font-light">HOURS</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5]">
              00
            </p>
            <p className="text-[10px] font-light">MINUTES</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F5F5F5]">
              00
            </p>
            <p className="text-[10px] font-light">SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeal;
