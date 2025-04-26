import React from "react";

const Footer = () => {
  return (
    <section className="px-24">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-32">
          <div className="space-y-10">
            <div>
              <div className="flex flex-row gap-1 items-baseline">
                <p className="font-black text-[30px]">MarketPress</p>
                <img
                  src="../public/images/news/square.png"
                  alt="dot"
                  className="w-2 h-2"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col">
                <p className="text-[#999999] text-[20px] font-extralight">
                  Got Question? Call us 24/7
                </p>
                <p className="text-[24px] font-normal">[80] 1017 197</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#777777] text-[13px] italic font-extrabold">
                  17 Princess Road, London, Greater
                </p>
                <p className="text-[#777777] text-[13px] italic font-extrabold">
                  London NW18JR, UK
                </p>
              </div>
              <div className="flex flex-row gap-2 rounded-lg w-fit bg-[#FD6150] px-6 py-4 sweep-transition">
                <img
                  src="../public/images/news/location-icon.png"
                  className="w-5 h-5"
                />
                <p className="text-[12px] text-white">View On Map</p>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div>
              <p className="text-[#999999] text-[20px] font-extralight">
                We Using
              </p>
              <p className="text-[24px] font-normal">Safe Payments</p>
            </div>
            <p className="text-[16px] font-light">Secured by:</p>
          </div>
        </div>

        <div className="flex flex-row gap-20 mr-[-100px]">
          <div className="space-y-5">
            <p className="text-[20px] font-semibold">Our Stores</p>
            <div className="text-[14px] font-light text-[#959595] space-y-3">
              <p>New York</p>
              <p>London SF</p>
              <p>Cockfosters BP</p>
              <p>Los Angeles</p>
              <p>Chicago</p>
              <p>Las Vergas</p>
              <p>Albarto</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-[20px] font-semibold">Quick Links</p>
            <div className="text-[14px] font-light text-[#959595] space-y-3">
              <p>Support Center</p>
              <p>Term & Conditions</p>
              <p>Shipping</p>
              <p>Privacy Policy</p>
              <p>Help</p>
              <p>Products Return</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="rounded-lg w-fit h-fit rotate-[-90deg] bg-[#EA1B25] mt-32 flex flex-col justify-center items-center relative sweep-transition">
            <img
              src="../public/images/news/up-arrow.png"
              className="w-6 h-6 rotate-90 absolute right-5"
            />
            <p className="text-[12px] text-white px-14 py-4">BACK TOP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
