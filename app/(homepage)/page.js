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
    // <section className="bg-[#f1f1f2] relative min-h-screen">
    <section className="bg-[#f1f1f2] md:bg-[#AADEF1] relative min-h-screen">
      {/* <section className="min-h-screen md:bg-[url(https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/-BG-TAKEOVER_PAYDAY.jpg)] bg-contain bg-no-repeat"> */}
      <section className="min-h-screen md:bg-[url(https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/October/Nivea-Super-Brand-Day/BG.jpg)] bg-contain bg-no-repeat">
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
    </section>
  );
}

