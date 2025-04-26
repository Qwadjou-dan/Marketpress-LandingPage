import React from "react";

const MainBanner = () => {
  return (
    <section className="bg-[#F6F6F6] px-32 py-16 mb-16">
      <div className="flex flex-row justify-between items-center">
        <div className="w-[600px] space-y-5">
          <p className="text-[60px] italic font-black leading-snug">
            GET ALL <span className="text-[#EA1B25]">ORIGINAL AUTO</span> PARTS
          </p>
          <p className="text-[#666666] font-bold tracking-wide">
            We have all your auto parts needs! Are you looking for the best
            performance car parts and car accessories
          </p>
          <div className="w-1/3">
            <p className="rounded-md bg-[#EA1B25] text-white text-[12px] px-12 py-4 tracking-tighter hover:bg-[#FFFFFF] hover:text-black cursor-pointer">
              VIEW COLLECTION
            </p>
          </div>
        </div>
        <div>
          <img src="../public/images/main/picture1.png" alt="red-rim" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
