import React from "react";
import Hero from "../Hero/Hero";
import Image from "next/image";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import FeaturedCategories2 from "../FeaturedCategories/FeaturedCategories2";
import EarlyShoppersDeals from "../EarlyShoppersDeals/EarlyShoppersDeals";
import TopSellingItems from "../TopSellingItems/TopSellingItems";
import EarlyBirdDeals from "../EarlyBirdDeals/EarlyBirdDeals";
import HalfPriceStore from "../HalfPriceStore/HalfPriceStore";
import LimitedStockDeals from "../LimitedStockDeals/LimitedStockDeals";
import EverythingMustGo from "../EverythingMustGo/EverythingMustGo";
import DealsToExpect from "../DealsToExpect/DealsToExpect";
import SponsoredProducts from "../SponsoredProducts/SponsoredProducts";
import BinatoneWeek from "../BinatoneWeek/BinatoneWeek";
import BinatoneWeek2 from "../BinatoneWeek/BinatoneWeek2";
import FlashSales from "../FlashSales/FlashSales";
import Banner1 from "../Banners/Banner1";
import Banner2 from "../Banners/Banner2";
import Banner3 from "../Banners/Banner3";
import OfficialStores from "../OfficialStores/OfficialStores";
import NiveaOfficialStore from "../OfficialStores/NiveaOfficialStore";
import BeautyBargain from "../BeautyBargain/BeautyBargain";
import BeautyBargains from "../BeautyBargain/BeautyBargains";

const HomePage = () => {
  return (
    <section className="bg-[#f1f1f2] relative min-h-screen">
      <div className="xl:max-w-[1200px] max-w-[950px] mx-auto space-y-4 p-4 lg:px-0">
        <Hero />
        <FeaturedCategories />
        <FlashSales />
        <FeaturedCategories2 />
        <SponsoredProducts />
        <DealsToExpect />
        <EarlyBirdDeals />
        <TopSellingItems />
        {/* <Banner1 /> */}
        <Banner2 />
        <LimitedStockDeals />
        <EarlyShoppersDeals />
        <HalfPriceStore />
        <Banner3 />
        <EverythingMustGo />
        <BinatoneWeek />
        <BinatoneWeek2 />
        <OfficialStores />
        <NiveaOfficialStore />
        <BeautyBargain />
        <BeautyBargains />

        <div>Home Page</div>
      </div>
    </section>
  );
};

export default HomePage;
