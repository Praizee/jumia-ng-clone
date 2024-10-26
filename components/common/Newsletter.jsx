import { Checkbox } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

import { HiEnvelope } from "react-icons/hi2";

const Newsletter = () => {
  return (
    <section className="bg-[#313133] text-white">
      <div className="xl:max-w-[1200px] max-w-[950px] mx-auto p-4 py-6 lg:px-3">
        {/* <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-8"> */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* <div className="md:col-span-1"> */}
          <div className="flex-none">
            <Image
              className="w-[100px] lg:w-[150px] object-contain invert brightness-0"
              src="https://www.jumia.com.ng/assets_he/logo_jumia.svg"
              width={500}
              height={200}
              alt="Jumia logo"
            />
          </div>

          {/* <div className="lg:col-span-2 max-w-[520px] flex flex-col gap-4 text-xs"> */}
          <div className="flex-1 max-w-[520px] flex flex-col gap-4 text-xs">
            <span className="flex flex-col gap-2">
              <p className="uppercase font-semibold">New to Jumia?</p>
              <p>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
            </span>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative w-full sm:max-w-[250px] group text-gray-500">
                <HiEnvelope className="absolute top-0 bottom-0 size-6 my-auto left-3 text-gray-500 group-focus-within:text-jumia-primary" />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  className="w-full py-2 pl-12 pr-4 text-base sm:text-sm border rounded-md outline-none bg-white focus:border-jumia-primary focus:ring-1 focus:ring-jumia-primary"
                />
              </div>

              <span className="flex gap-2">
                <button
                  type="button"
                  className="rounded-md px-6 py-2 uppercase font-semibold border border-white hover:border-jumia-primary hover:text-jumia-primary duration-100 active:scale-95"
                >
                  Male
                </button>
                <button
                  type="button"
                  className="rounded-md px-6 py-2 uppercase font-semibold border border-white hover:border-jumia-primary hover:text-jumia-primary duration-100 active:scale-95"
                >
                  Female
                </button>
              </span>
            </div>

            {/* terms_and_conditions */}
            <div>
              <div className="flex gap-1 items-center group">
                <span className="group-hover:bg-jumia-primary/70 group-active:bg-jumia-primary/30 rounded-full p-3 flex items-center">
                  <input
                    type="checkbox"
                    id="terms_and_conditions"
                    class="text-jumia-primary bg-gray-100 border-none rounded focus:ring-jumia-primary focus:ring-1"
                  />
                </span>
                <label htmlFor="terms_and_conditions">
                  I agree to Jumia’s Privacy and Cookie Policy. You can
                  unsubscribe from newsletters at any time.
                </label>
              </div>
              <Link
                href=""
                className="text-jumia-primary hover:underline duration-100 ml-11 mt-1"
              >
                I accept the Legal Terms
              </Link>
            </div>
          </div>

          {/* <div className="md:col-span-1 flex flex-col gap-4 text-xs"> */}
          <div className="flex-none flex flex-col gap-4 text-xs">
            <div className="flex gap-4 items-center">
              <span className="p-6 bg-jumia-primary rounded-md" />
              <span className="flex flex-col gap-2">
                <p className="uppercase font-semibold">
                  DOWNLOAD JUMIA FREE APP
                </p>
                <p>Get access to exclusive offers!</p>
              </span>
            </div>

            <div className="flex gap-4">
              <Link
                href=""
                className="flex gap-2 items-center hover:text-jumia-primary duration-100 w-max"
              >
                <FaApple className="size-6" />
                <span className="">
                  <p className="text-[9px]">Download on the</p>
                  <p className="text-sm -mt-1.5">App Store</p>
                </span>
              </Link>
              <Link
                href=""
                className="flex gap-2 items-center hover:text-jumia-primary duration-100 w-max"
              >
                <FaGooglePlay className="size-6" />
                <span className="">
                  <p className="uppercase text-[9px]">GET IT ON</p>
                  <p className="text-sm -mt-1.5">Google Play</p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
