import React from "react";

const PromoBanner = () => {
  return (
    <section className="px-24 mb-20">
      <div className="flex flex-row justify-center items-center ml-5 bg-gradient-to-r from-[#DA2B65] via-[#FADD9C] to-[#F7F0D6] w-[73rem] h-[300px] relative">
        <div className="absolute left-14 bottom-[-7px]">
          <img
            src="../public/images/main/deal3.png"
            alt="hydraulic disk"
            className="w-[370px] h-[370px]"
          />
        </div>
        <div className="ml-72">
          <p className="text-amountColor text-[22px] font-thin">Get 50% Off</p>
          <p className="text-[45px] font-bold tracking-wider">
            Hydraulic Disks
          </p>
          <div className="inline-block rounded-md px-7 py-3 bg-amountColor mt-16 hover:bg-[#83B734] transition-transform east-in duration-800 hover:animate-pulse cursor-pointer">
            <p className="text-[12px] text-white">GO SHOP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
