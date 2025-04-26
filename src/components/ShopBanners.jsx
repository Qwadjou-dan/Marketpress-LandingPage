import React from "react";

const ShopBanners = () => {
  return (
    <section className="px-24 mb-20">
      <div className="flex flex-row justify-between">
        <div className="inline-block rounded-md w-[390px] pl-8 pr-16 py-16 space-y-4 bg-[url('../public/images/main/bgimage1.png')] bg-contain bg-[right_1rem] bg-no-repeat bg-[#F7F7F7]">
          <p className="text-[#707981] text-[22px]">Get 50% Off</p>
          <p className="font-bold text-[24px]">Every Hydrolic Break Item</p>
          <div className="inline-block rounded-md px-7 py-3 bg-redBg sweep-transition cursor-pointer">
            <p className="text-[12px] text-white">GO SHOP</p>
          </div>
        </div>

        <div className="inline-block rounded-md w-[390px] pl-8 pr-16 py-16 space-y-4 bg-[url('../public/images/main/bgimage3.png')] bg-contain bg-no-repeat">
          <p className="text-white text-[22px]">Feel Better</p>
          <p className="font-bold text-white text-[24px] w-[170px] leading-7">
            Drive Easy <span className="font-normal">From $50</span>
          </p>
          <div className="inline-block rounded-md px-7 py-3 bg-[#9C0009] sweep-transition cursor-pointer">
            <p className="text-[12px] text-white">GO SHOP</p>
          </div>
        </div>

        <div className="inline-block rounded-md w-[390px] pl-8 pr-12 pt-10 space-y-4 bg-[url('../public/images/main/bgimage2.png')] bg-contain bg-no-repeat">
          <p className="text-[#EA1B25] text-[22px]">Get 50% Off</p>
          <p className="font-bold text-[24px] text-white w-[140px]">
            Every Hydrolic Break Item
          </p>
          <div className="inline-block rounded-md px-7 py-3 bg-redBg sweep-transition cursor-pointer">
            <p className="text-[12px] text-white">GO SHOP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanners;
