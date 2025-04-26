import React from "react";

const WeekCategories = () => {
  return (
    <section className="px-28 mb-20">
      <div className="flex flex-row justify-between items-center">
        <p className="font-medium text-[22px] mb-5">Top Categories This Week</p>
        <p className="text-amountColor text-[12px] font-semibold cursor-pointer">
          Full Catalog
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="pt-12 bg-[#F7F7F7] w-[35rem] h-[35rem] flex flex-col justify-between mr-10">
            <div className="pr-10">
              <div className="text-[16px] text-amountColor flex flex-row justify-end gap-1">
                <p className="hover:text-[#222222] cursor-pointer">
                  Accessories
                </p>
                <p className="hover:text-[#222222] cursor-pointer">
                  Hero Brakes
                </p>
              </div>
              <p className="font-bold text-[34px] flex justify-end items-baseline hover:text-[#0162D1] cursor-pointer">
                Lotary Extension Arm
              </p>
            </div>
            <div className="flex flex-row justify-center ml-10">
              <div className="w-[100px] h-[100px] mt-[200px] p-10 border-none bg-[#EA1B25] rounded-full flex flex-col justify-center items-center bg-amountColor">
                <p className="font-bold text-[20px] text-white">6%</p>
                <p className="text-white">Offer</p>
              </div>
              <div className="hover:scale-110 transition-transform ease-out duration-1000">
                <img
                  src="../public/images/main/arm.png"
                  className="w-[380px] h-[400px]"
                  alt="Extension Arm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-row gap-12">
            <div className="bg-[#F7F7F7] w-fit pl-[70px] pr-5 pt-5 pb-2">
              <div className="flex flex-col justify-end items-end">
                <p className="text-[13px] text-amountColor">
                  Accessories Tire Grid
                </p>
                <p className="text-[25px] font-semibold">Kilt Techno 2.0</p>
              </div>
              <div className="flex items-end justify-end mr-[-12px] hover:scale-110 transition-transform ease-out duration-1000">
                <img
                  src="../public/images/main/deal4.png"
                  className="w-[150px] h-[150px]"
                  alt="Kilt Techno"
                />
              </div>
            </div>

            <div className="bg-[#F7F7F7] w-fit h-[250px] pl-[50px] pr-5 pt-5 pb-5 relative">
              <div className="flex flex-col justify-end items-end">
                <p className="text-[13px] text-amountColor">
                  Accessories Racing Motocycle
                </p>
                <p className="text-[25px] font-semibold">Gheoi Terminus</p>
                <p className="text-[25px] font-semibold">RF</p>
              </div>
              <div className="flex items-end justify-end mr-[-12px] absolute top-[90px] right-6 hover:scale-110 transition-transform ease-out duration-1000">
                <img
                  src="../public/images/main/deal1.png"
                  className="w-[150px] h-[150px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className="bg-[#F7F7F7] w-fit pl-[37px] pr-5 pt-5 pb-2">
              <div className="flex flex-col justify-end items-end">
                <p className="text-[13px] text-amountColor">
                  Accessories Hydraulic Disk
                </p>
                <p className="text-[25px] font-semibold">Kinlock Pins CWR</p>
              </div>
              <div className="flex items-end justify-end mr-[-12px] hover:scale-110 transition-transform ease-out duration-1000">
                <img
                  src="../public/images/main/deal3.png"
                  className="w-[150px] h-[150px]"
                />
              </div>
            </div>
            <div className="bg-[#F7F7F7] w-fit pl-[70px] pr-5 pt-5 pb-2">
              <div className="flex flex-col justify-end items-end">
                <p className="text-[13px] text-amountColor">
                  Accessories Xspeed Wheel
                </p>
                <p className="text-[25px] font-semibold">Koneal</p>
                <p className="text-[25px] font-semibold">Commander</p>
              </div>
              <div className="flex items-end justify-end mr-[-12px] hover:scale-110 transition-transform ease-out duration-1000">
                <img
                  src="../public/images/main/deal5.png"
                  className="w-[150px] h-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekCategories;
