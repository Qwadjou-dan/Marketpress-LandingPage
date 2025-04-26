import React from "react";

const NewsLetter = () => {
  return (
    <section className="px-24 bg-[#EA1B25] h-fit w-full py-20 mb-20">
      <div className="flex flex-row justify-center items-center gap-32">
        <div className="flex flex-col gap-2">
          <p className="text-white text-[26px] tracking-wider font-light">
            Newsletter & Get Updates
          </p>
          <p className="text-[14px] text-white">
            Sign up for our newsletter to get up-to-date from us
          </p>
        </div>
        <div className="flex flex-row">
          <input
            type="email"
            id="email"
            placeholder="Enter Your Mail Here....."
            className="placeholder-custom py-4 pl-6 w-[400px] rounded-l-[40px]"
          />
          <button className="rounded-r-[40px] text-[14px] text-white px-8 bg-[#333E48] hover:bg-[#83B734] transition-transform ease duration-500">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
