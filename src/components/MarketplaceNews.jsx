import React from "react";

const MarketplaceNews = () => {
  return (
    <section className="px-24 bg-[#F9F9F9] w-full h-[42rem] mb-32">
      <div>
        <div className="flex flex-row justify-between items-center pt-20 pb-5">
          <p className="font-medium text-[22px] mb-5">Marketplace News</p>
          <p className="text-amountColor text-[12px] font-semibold">
            View All Articles
          </p>
        </div>
        <div className="flex flex-row justify-between items-top">
          <div>
            <img
              src="../public/images/news/image1.jpg"
              className="w-[360px] h-[200px]"
            />
            <div className="w-fit flex flex-col gap-7 pl-10 pr-[18px] py-10 bg-white">
              <p className="text-[14px] text-[#0964D2] font-medium">
                Electronics
              </p>
              <p className="text-[24px] font-bold w-[300px]">
                Seating Collection Inspiration Is Not Enough For People
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/comment-icon.png"
                    className="w-5 h-5"
                  />
                  <p className="text-[10px]">0</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/clock-icon.png"
                    className="w-4 h-4"
                  />
                  <p className="text-[10px]">October 1, 2018</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="../public/images/news/image2.jpg"
              className="w-[360px] h-[200px]"
            />
            <div className="w-fit flex flex-col gap-7 pl-10 pr-[18px] py-10 bg-white">
              <p className="text-[14px] text-[#0964D2] font-medium">Speaker</p>
              <p className="text-[24px] font-bold w-[300px]">
                Exterior Ideas: 10 Colored Fiber Garden Seats
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/comment-icon.png"
                    className="w-5 h-5"
                  />
                  <p className="text-[10px]">0</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/clock-icon.png"
                    className="w-4 h-4"
                  />
                  <p className="text-[10px]">October 1, 2018</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="../public/images/news/image3.jpg"
              className="w-[360px] h-[200px]"
            />
            <div className="w-fit flex flex-col gap-7 pl-10 pr-[18px] py-10 bg-white">
              <p className="text-[14px] text-[#0964D2] font-medium">
                Electronics
              </p>
              <p className="text-[24px] font-bold w-[300px]">
                Creative Water Features And Exterior Design
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/comment-icon.png"
                    className="w-5 h-5"
                  />
                  <p className="text-[10px]">0</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="../public/images/news/clock-icon.png"
                    className="w-4 h-4"
                  />
                  <p className="text-[10px]">October 1, 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceNews;
