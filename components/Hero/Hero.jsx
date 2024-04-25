import React from "react";
import NavMenu from "../NavMenu";
import SlideShow from "../SlideShow/SlideShow";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[150vh]  md:bg-[url(https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/-BG-TAKEOVER_PAYDAY.jpg)] bg-cover bg-no-repeat">
      {/* <div className="max-w-[1200px] mx-auto grid gap-4 grid-cols-1 md:grid-cols-[15%_70%_15%] py-4"> */}
      <div className="max-w-[1200px] mx-auto flex gap-4 py-4">
        <NavMenu />
        <SlideShow />

        <div className="flex flex-col gap-4">
          <div className="bg-white flex-1 flex flex-col justify-between gap-2 rounded-md p-[16px]">
            <div className="flex gap-2 items-center ">
              <Image
                className=""
                src={
                  "https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png"
                }
                alt="icon"
                width={34}
                height={34}
              />
              <span className="flex flex-col">
                <p className="font-semibold uppercase text-sm">call to order</p>
                <p className="text-xs text-gray-600">0700-600-000</p>
              </span>
            </div>

            <div className="flex gap-2 items-center ">
              <Image
                className=""
                src={
                  "https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png"
                }
                alt="icon"
                width={34}
                height={34}
              />
              <span className="flex flex-col">
                <p className="font-semibold capitalize">sell on jumia</p>
              </span>
            </div>

            <div className="flex gap-2 items-center ">
              <Image
                className=""
                src={
                  "https://ng.jumia.is/cms/0-1-homepage/bsb/icone-2-return.png"
                }
                alt="icon"
                width={34}
                height={34}
              />
              <span className="flex flex-col">
                <p className="font-semibold capitalize">best deals</p>
              </span>
            </div>
          </div>

          {/* shop and earn */}
          <Image
            className="object-contain rounded-md flex-1"
            src={
              "https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/shop_earn.png"
            }
            alt="earn"
            width={218}
            height={184}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
