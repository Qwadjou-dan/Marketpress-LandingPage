import React from "react";

const HeaderTop = () => {
  return (
    <section className="bg-[#F5F5F5] w-full px-32 py-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-3">
            <img
              src="../public/images/header/delivery-bus.png"
              alt="delivery-bus"
              className="w-7 h-7"
            />
            <p className="text-widgetSize font-roboto text-headerWidget tracking-wide">
              Free Delivery
            </p>
          </div>
          <div className="w-[1px] h-[22px] bg-[#D7D7D7]"></div>
          <div className="flex flex-row items-center gap-4">
            <img
              src="../public/images/header/globe.png"
              alt="globe"
              className="w-4 h-4"
            />
            <p className="text-widgetSize font-roboto text-headerWidget tracking-wide">
              Return Policy
            </p>
          </div>
          <div className="w-[1px] h-[22px] bg-[#D7D7D7]"></div>
          <div className="flex flex-row items-center gap-3">
            <p className="text-widgetSize font-roboto text-headerWidget tracking-wide">
              Follow Us
            </p>
            <img
              src="../public/images/header/fb.png"
              alt="facebook"
              className="w-4 h-4"
            />
            <img
              src="../public/images/header/x.png"
              alt="x"
              className="w-4 h-4"
            />
            <img
              src="../public/images/header/instagram.png"
              alt="instagram"
              className="w-4 h-4"
            />
            <img
              src="../public/images/header/pinterest.png"
              alt="pinterest"
              className="w-4 h-4"
            />
          </div>
        </div>
        <div>
          <p className="text-widgetSize text-headerWidget cursor-pointer ease-in duration-300 hover:text-white">
            Login
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
