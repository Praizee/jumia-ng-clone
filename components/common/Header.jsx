import Image from "next/image";
import Link from "next/link";
import JumiaPay from "@/assets/svg/JumiaPay";

const Header = () => {
  return (
    <section className="hidden md:block">
      <div className="p-1.5 w-full bg-[#F1F1F2] px-4 xl:px-0">
        <div className=" xl:max-w-[1200px] max-w-[950px] mx-auto flex gap-12">
          <span className="flex gap-1 items-center">
            <Image
              src="https://www.jumia.com.ng/assets_he/favicon.adbd556a.svg"
              alt="top strip"
              width={100}
              height={100}
              className="w-3.5 h-max"
            />
            <Link
              href=""
              className="text-jumia-primary text-xs font-semibold hover:underline "
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
              className="w-[5%] h-max"
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
