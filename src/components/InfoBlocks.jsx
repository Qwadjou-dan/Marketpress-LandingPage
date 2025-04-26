import React from "react";
import InfoBlock from "./InfoBlock";

const InfoBlocks = () => {
  const blocks = [
    {
      icon: "../public/images/main/icon1.png",
      title: "Free Delivery",
      subtitle: "from $78",
    },
    {
      icon: "../public/images/main/icon2.png",
      title: "99% Customer",
      subtitle: "feedbacks",
    },
    {
      icon: "../public/images/main/icon3.png",
      title: "10 Days",
      subtitle: "for free return",
    },
    {
      icon: "../public/images/main/icon4.png",
      title: "Payment",
      subtitle: "secure system",
    },
    {
      icon: "../public/images/main/icon5.png",
      title: "24/7",
      subtitle: "online support",
    },
  ];

  return (
    <section className="px-24 mb-20">
      <div className="flex flex-row justify-center gap-0">
        {blocks.map((block, index) => (
          <InfoBlock
            key={index}
            icon={block.icon}
            title={block.title}
            subtitle={block.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoBlocks;
