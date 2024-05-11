import React from "react";
import Image from "next/image";
import Link from "next/link";
import JumiaPay from "@/assets/svg/JumiaPay";

const Header = () => {
  return (
    <section className="hidden md:block">
      <div className="bg-[#7999A8]">
        <div className=" max-w-[1200px] mx-auto">
          <Image
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_17/Pay-Day-Super-Saver/TOP-STRIP_PAY-DAY-ezgif.com-optimize.gif"
            alt="top strip"
            width={1100}
            height={400}
            className="w-full"
            unoptimized
          />
        </div>
      </div>
      <div className="p-1.5 w-full bg-[#F1F1F2] px-4 xl:px-0">
        <div className=" max-w-[1200px] mx-auto flex gap-12">
          <span className="flex gap-1 items-center">
            <Image
              src="https://www.jumia.com.ng/assets_he/favicon.adbd556a.svg"
              alt="top strip"
              width={100}
              height={100}
              className="w-4 h-max"
            />
            <Link
              href=""
              className="text-[#E07E22] text-sm font-semibold hover:underline "
            >
              Sell on Jumia
            </Link>
          </span>
          <span className="flex flex-1 justify-center items-center">
            <Image
              src="https://www.jumia.com.ng/assets_he/logo_jumia.svg"
              alt="top strip"
              width={600}
              height={300}
              className="w-[7%] h-max"
            />
            <JumiaPay />
            {/* <Image
              src={JumiaPay}
              alt="top strip"
              width={600}
              height={300}
              className="w-[9%] h-max"
            /> */}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
