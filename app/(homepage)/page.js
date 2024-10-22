import { CTA } from "@/components/common";
import {
  Hero,
  FeaturedCategories,
  FeaturedCategories2,
  FlashSales,
  SponsoredProducts,
  DealsToExpect,
  EarlyBirdDeals,
  TopSellingItems,
  Banner2,
  LimitedStockDeals,
  EarlyShoppersDeals,
  HalfPriceStore,
  Banner3,
  EverythingMustGo,
  BinatoneWeek,
  BinatoneWeek2,
  OfficialStores,
  NiveaOfficialStore,
  BeautyBargain,
  BeautyBargains,
  Appliances,
  AppliancesDeals,
  PhoneTabletDeals,
  PhoneDeals,
  FashionForward,
  FashionForwardDeals,
  TopSearched,
  Handpicked,
  ShoppingDestination,
} from "@/components/HomePage";

export default function Home() {
  return (
    <section className="bg-[#f1f1f2] relative min-h-screen">
      <CTA />
      <div className="xl:max-w-[1200px] max-w-[950px] mx-auto space-y-4 p-4 lg:px-0">
        <Hero />
        <FeaturedCategories />
        <FlashSales />
        <FeaturedCategories2 />
        <SponsoredProducts />
        <DealsToExpect />
        <EarlyBirdDeals />
        <TopSellingItems />

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
        <Appliances />
        <AppliancesDeals />
        <PhoneTabletDeals />
        <PhoneDeals />
        <FashionForward />
        <FashionForwardDeals />
        <TopSearched />
        <Handpicked />

        <ShoppingDestination />
      </div>
    </section>
  );
}

