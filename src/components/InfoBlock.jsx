import React from "react";

const InfoBlock = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-row gap-3 border border-[#cfcfcf] w-fit p-10">
      <img src={icon} className="w-10 h-10" alt={title} />
      <div className="space-y-2">
        <p className="font-medium">{title}</p>
        <p className="text-[#626060] text-[12px] font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
