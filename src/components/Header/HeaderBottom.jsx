import React from "react";

const HeaderBottom = () => {
  return (
    <section className="px-32 py-3 shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-3 rounded-md bg-[#EAEAEA] px-10 py-4">
          <div className="flex flex-row">
            <img
              src="../public/images/header/menu-dots.png"
              className="w-6 h-6"
            />
            <img
              src="../public/images/header/menu-lines.png"
              className="w-6 h-6 ml-[-6px]"
            />
          </div>
          <p className="font-medium text-[18px] text-headerWidget">
            All Categories
          </p>
          <img
            src="../public/images/header/arrow-down2.png"
            className="w-5 h-5"
          />
        </div>

        <div className="flex flex-row gap-[60px] text-[14px] font-semibold text-menuBar">
          <div className="flex flex-row items-end gap-1">
            <p>Home</p>
            <img
              src="../public/images/header/arrow-down3.png"
              className="w-4 h-4"
            />
          </div>
          <div className="flex flex-row items-end gap-1">
            <p>Pages</p>
            <img
              src="../public/images/header/arrow-down3.png"
              className="w-4 h-4"
            />
          </div>
          <div className="flex flex-row items-end gap-1">
            <div className="relative">
              <p>Shop</p>
              <div className="absolute bottom-7 left-3">
                <p className="bg-redBg text-white text-[10px] py-1 px-2 relative">
                  NEW
                </p>
                <div className="border-redBg border-b-solid border-b-transparent border-r-solid border-r-transparent border-b-[10px] border-t-[5px] border-r-[5px] absolute"></div>
              </div>
            </div>
            <img
              src="../public/images/header/arrow-down3.png"
              className="w-4 h-4"
            />
          </div>
          <div className="flex flex-row items-end gap-1">
            <p>Blog</p>
            <img
              src="../public/images/header/arrow-down3.png"
              className="w-4 h-4"
            />
          </div>
          <div className="flex flex-row items-end gap-1">
            <div className="relative">
              <p>Gallery</p>
              <div className="absolute bottom-7 left-3">
                <p className="bg-redBg text-white text-[10px] py-1 pl-2 pr-4 relative">
                  HOT
                </p>
                <div className="border-redBg border-b-solid border-b-transparent border-r-solid border-r-transparent border-b-[10px] border-t-[5px] border-r-[5px] absolute"></div>
              </div>
            </div>
            <img
              src="../public/images/header/arrow-down3.png"
              className="w-4 h-4"
            />
          </div>
        </div>

        <div className="flex flex-col items-center rounded-md bg-[#EA1B25] px-20 py-2 hover:bg-[#000000] transition-transform duration-500 ease">
          <p className="font-extrabold text-white">BLACK FRIDAY</p>
          <p className="text-white text-[13px]">Get 45% Off!</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderBottom;
