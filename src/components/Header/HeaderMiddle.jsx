import React from "react";

const HeaderMiddle = () => {
  return (
    <section className="bg-[#0F233C] w-full px-32 py-7">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-baseline gap-1">
          <p className="font-black text-[30px] text-white">MarketPress</p>
          <img
            src="../public/images/header/square.png"
            alt="dot"
            className="w-2 h-2"
          />
        </div>

        <div className="flex flex-row ml-[-80px]">
          <div className="flex flex-row justify-between items-center gap-60 bg-white pl-6 pr-3 rounded-l-md py-3">
            <div>
              <input
                type="text"
                id="product"
                placeholder="Find your product"
                className="placeholder-custom"
              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-8">
                <p className="text-[13px] font-medium text-[#7B7B7B]">
                  All categories
                </p>
                <img
                  src="../public/images/header/arrow-down.png"
                  className="w-3 h-3"
                />
              </div>
            </div>
          </div>
          <div className="rounded-r-md bg-redBg flex justify-center items-center w-14">
            <img src="../public/images/header/search.png" className="w-4 h-4" />
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div className="relative">
            <img
              src="../public/images/header/heart.png"
              className="w-10 h-10"
            />
            <div className="flex justify-center items-center border-[3px] border-white w-6 h-6 rounded-full bg-[#F0F0F0] text-[12px] absolute left-[22px] bottom-[25px]">
              0
            </div>
          </div>
          <div className="relative">
            <img src="../public/images/header/bag.png" className="w-10 h-10" />
            <div className="flex justify-center items-center border-[3px] border-white w-6 h-6 rounded-full bg-redBg text-[12px] text-white absolute left-[22px] bottom-[25px]">
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMiddle;
