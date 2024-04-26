"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import Image from "next/image";

const slideShowImages = [
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/Desktop_Homepage_Slider__712x384-payday-deals.png",
  "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg",
  "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/adidas/2024/April/Adi_712x384_hp.png",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1Advertising/April/zaron/712X384.jpg",
  "https://ng.jumia.is/cms/0-1-initiatives/dollar-down-prices-down/homepage-slider.jpg",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/appliances/slider/Artboard.png",
  "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/April/Artboard_1_slider.png",
  "https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2024/april-24/712x384.jpg",
];

export default function SlideShow() {
  return (
    <>
      {/* fix 'z-index' (maybe) issue with dropdown and drawer rendering/displaying below this slide */}
      <div className="overflow-hidden px-4 md:px-0 max-w-screen-xl md:max-w-[712px]">
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
            {slideShowImages.map((image, index) => (
              <SwiperSlide key={image}>
                <Image
                  className="w-[712px] cursor-pointer rounded-md md:h-[384px]"
                  src={image}
                  width={712}
                  height={384}
                  alt="slideshow-item"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css";
// import Image from "next/image";

// const slideShowImages = [
//   "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/Desktop_Homepage_Slider__712x384-payday-deals.png",
//   "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg",
//   "https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/adidas/2024/April/Adi_712x384_hp.png",
//   "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1Advertising/April/zaron/712X384.jpg",
//   "https://ng.jumia.is/cms/0-1-initiatives/dollar-down-prices-down/homepage-slider.jpg",
//   "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/appliances/slider/Artboard.png",
//   "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/April/Artboard_1_slider.png",
//   "https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2024/april-24/712x384.jpg",
// ];

// export default function SlideShow() {
//   return (
//     <>
//       <div className="overflow-hidden hidden lg:block max-w-[712px]">
//         <div className="w-full">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             navigation
//             loop={true}
//             pagination={{
//               clickable: true,
//             }}
//           >
//             {slideShowImages.map((image, index) => (
//               <SwiperSlide key={image}>
//                 <Image
//                   className="w-[712px] cursor-pointer rounded-md h-[384px]"
//                   src={image}
//                   width={712}
//                   height={384}
//                   alt="slideshow-item"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <div className="overflow-hidden px-4 z-10 lg:hidden block max-w-screen-xl">
//         <div className="w-full">
//           {/* w-[230vw] -translate-x-[65vw] */}
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             pagination={{
//               clickable: true,
//             }}
//           >
//             {slideShowImages.map((image, index) => (
//               <SwiperSlide key={image}>
//                 <Image
//                   className="cursor-pointer rounded-md h-auto"
//                   // w-[712px]
//                   src={image}
//                   width={712}
//                   height={384}
//                   alt="slideshow-item"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }
