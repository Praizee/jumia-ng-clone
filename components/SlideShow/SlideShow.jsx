"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

const slideShowImages = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/Desktop_Homepage_Slider__712x384-payday-deals.png",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/adidas/2024/April/Adi_712x384_hp.png",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1Advertising/April/zaron/712X384.jpg",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/dollar-down-prices-down/homepage-slider.jpg",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/appliances/slider/Artboard.png",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/April/Artboard_1_slider.png",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2024/april-24/712x384.jpg",
    link: "",
  },
];

export default function SlideShow() {
  return (
    <>
      <div className="overflow-hidden hidden lg:inline-flex px-4 md:px-0 max-w-screen-xl md:max-w-[712px] z-0">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            loop={true}
            pagination={{
              clickable: true,
            }}
          >
            {slideShowImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item.link}>
                  <Image
                    className="w-[712px] cursor-pointer rounded-md md:h-[384px]"
                    src={item.image}
                    width={712}
                    height={384}
                    alt="slideshow-item"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="overflow-hidden lg:hidden">
        <div className="w-[220vw] -translate-x-[65vw]">
          <Swiper
            className="w-full"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
          >
            {slideShowImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item.link}>
                  <Image
                    className={`w-[718px] cursor-pointer rounded-md h-auto`}
                    src={item.image}
                    width={712}
                    height={384}
                    alt="slideshow-item"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

// OLDER

{
  /* <>
  <div className="overflow-hidden hidden lg:inline-flex">
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {slideShowImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className={`w-[718px] cursor-pointer rounded-md h-auto`}
              src={item.image}
              width={712}
              height={384}
              alt="slideshow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>

  <div className="overflow-hidden lg:hidden">
    <div className="w-[230vw] -translate-x-[65vw]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
      >
        {slideShowImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className={`w-[718px] cursor-pointer rounded-md h-auto`}
              src={item.image}
              width={712}
              height={384}
              alt="slideshow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</>  */
}
