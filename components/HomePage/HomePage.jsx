import React from "react";
import Hero from "../Hero/Hero";
import Image from "next/image";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import TopSellingItems from "../TopSellingItems/TopSellingItems";
import FlashSales from "../FlashSales/FlashSales";
import MagicDeals from "../MagicDeals/MagicDeals";

const HomePage = () => {
  return (
    <section className="bg-[#f1f1f2] relative min-h-screen">
      <div className="xl:max-w-[1200px] max-w-[950px] mx-auto space-y-4 p-4 lg:px-0">
        {/* text-jumia-primary */}

        <Hero />
        <FeaturedCategories />
        <TopSellingItems />
        <FlashSales />
        <MagicDeals />
        <TopSellingItems />

        <div>Home Page</div>
      </div>
    </section>
  );
};

export default HomePage;
