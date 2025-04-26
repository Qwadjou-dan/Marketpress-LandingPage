import React from "react";
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner";
import ShopBanners from "./components/ShopBanners";
import DealsOfWeek from "./components/DealsOfWeek/DealsOfWeek";
import InfoBlocks from "./components/InfoBlocks";
import PromoBanner from "./components/PromoBanner";
import WeekCategories from "./components/WeekCategories";
import RecentlyAdded from "./components/RecentlyAdded";
import MarketplaceNews from "./components/MarketplaceNews";
import Sponsors from "./components/Sponsors";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <MainBanner />
      <ShopBanners />
      <DealsOfWeek />
      <InfoBlocks />
      <PromoBanner />
      <WeekCategories />
      <RecentlyAdded />
      <MarketplaceNews />
      <Sponsors />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
