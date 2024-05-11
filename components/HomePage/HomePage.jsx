import React from "react";
import Hero from "../Hero/Hero";
import Image from "next/image";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import TopSellingItems from "../TopSellingItems/TopSellingItems";
import FlashSales from "../FlashSales/FlashSales";
import MagicDeals from "../MagicDeals/MagicDeals";

const HomePage = () => {
  return (
    <section className="md:bg-[#7999A8] bg-[#f1f1f2] relative">
      {/* <div className="h-[120vh] border-2 border-black md:bg-[url(https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/-BG-TAKEOVER_PAYDAY.jpg)] bg-cover bg-no-repeat" /> */}

      <section className="min-h-screen md:bg-[url(https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/-BG-TAKEOVER_PAYDAY.jpg)] bg-contain bg-no-repeat">
        <div className="max-w-[1200px] mx-auto space-y-4 p-4 lg:px-0">
          {/* text-[#ED9720] */}
          <Hero />
          <FeaturedCategories />
          <TopSellingItems />
          <FlashSales />
          <MagicDeals />
          <TopSellingItems />

          <div>Home Page</div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
