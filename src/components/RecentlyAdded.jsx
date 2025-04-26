import React from "react";

const RecentlyAdded = () => {
  return (
    <section className="px-24 mb-20">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[20px] font-medium">Recently Added</p>
        <div className="flex flex-row gap-10">
          <p className="text-amountColor text-[16px]">On Sell</p>
          <p className="text-[#969696] text-[16px]">Hot Sell</p>
          <p className="text-[#969696] text-[16px]">Trend</p>
          <p className="text-[#969696] text-[16px]">Best Sell</p>
        </div>
      </div>
      <div className="h-[1.5px] w-full bg-[#F5F5F5] mb-2 mt-2">
        <div className="h-[2px] w-[40px] bg-amountColor ml-[55rem] relative">
          <div className="border-redBg border-l-solid border-l-transparent border-r-solid border-r-transparent border-l-[6px] border-t-[8px] border-r-[6px] absolute left-3"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal2.png"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium whitespace-nowrap">
              Lotary Extension Arm
            </p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound750.00</del>&pound700.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal1.png"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium">Ghoei Terminus RF</p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound590.00</del>&pound350.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal3.png"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium">Kinlocks Pins CWR</p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound700.00</del>&pound556.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal4.png"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium">Kilt Techno 2.0</p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound950.00</del>&pound798.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal5.png"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium">Koneal Commander</p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound750.00</del>&pound674.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-fit p-6 flex flex-col justify-center items-center hover:opacity-70 transition-transform ease-out duration-[2000ms]">
            <img
              src="../public/images/main/deal6.jpg"
              alt="image5"
              className="w-[160px] h-[160px]"
            />
            <p className="text-[16px] font-medium">Fell Star MIPS</p>
            <p className="text-[18px] text-amountColor text-medium">
              <del className="text-[#E9E9E9]">&pound980.00</del>&pound590.00
            </p>
          </div>
          <div className="h-[230px] w-[1.5px] bg-[#F5F5F5] mt-4"></div>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center mt-5">
        <div className="w-2 h-2 rounded-full bg-amountColor"></div>
        <div className="w-2 h-2 rounded-full bg-[#F9F9F9]"></div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
