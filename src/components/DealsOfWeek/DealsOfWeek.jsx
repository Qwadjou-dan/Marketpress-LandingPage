import React from "react";
import FeaturedDeal from "./FeaturedDeal";
import DealProductGrid from "./DealProductGrid";

const DealsOfWeek = () => {
  return (
    <section className="px-24 mb-20">
      <div className="flex flex-row gap-5">
        <FeaturedDeal />
        <DealProductGrid />
      </div>
    </section>
  );
};

export default DealsOfWeek;
