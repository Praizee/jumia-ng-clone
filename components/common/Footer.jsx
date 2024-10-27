import Link from "next/link";
import React from "react";

import { FaDhl, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { RiVisaLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { SiMastercard } from "react-icons/si";
import JumiaPay from "@/assets/svg/JumiaPay";

const Footer = () => {
  return (
    <footer className="bg-[#535357] text-[#F1F1F2] text-xs">
      <div className="xl:max-w-[1200px] max-w-[950px] mx-auto p-4 py-8 lg:px-0 flex flex-col gap-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* need help */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="uppercase font-semibold">Need Help?</p>
              <span className="flex flex-col gap-1.5">
                <Link href="" className="hover:underline duration-100 w-max">
                  Chat with us
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Help Center
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Contact Us
                </Link>
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <p className="uppercase font-semibold">Useful Links</p>
              <span className="flex flex-col gap-1.5">
                <Link href="" className="hover:underline duration-100 w-max">
                  Service Center
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  How to shop on Jumia?
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Delivery options and timelines
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  How to return a product on Jumia?
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Corporate and bulk purchases
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Report a Product
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Dispute Resolution Policy
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Returns & Refund Timeline
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Return Policy
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Black Friday
                </Link>
              </span>
            </div>
          </div>

          {/* about jumia */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-semibold">About Jumia</p>
            <span className="flex flex-col gap-1.5">
              <Link href="" className="hover:underline duration-100 w-max">
                About us
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Jumia careers
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Jumia Express
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Terms and Conditions
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Privacy Notice
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Jumia Store Credit Terms & Conditions
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Jumia Payment Information Guidelines
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Cookie Notice
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Jumia Global
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Official Stores
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Flash Sales
              </Link>
            </span>
          </div>

          {/* MAKE MONEY WITH JUMIA */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-semibold">MAKE MONEY WITH JUMIA</p>
            <span className="flex flex-col gap-1.5">
              <Link href="" className="hover:underline duration-100 w-max">
                Sell on Jumia
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Vendor hub
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Become a Sales Consultant
              </Link>
              <Link href="" className="hover:underline duration-100 w-max">
                Join the Jumia KOL Program
              </Link>
            </span>
          </div>

          {/* JUMIA INTERNATIONAL */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-semibold">JUMIA INTERNATIONAL</p>
            <div className="grid grid-cols-2 max-w-[190px]">
              <span className="flex flex-col gap-1.5">
                <Link href="" className="hover:underline duration-100 w-max">
                  Algeria
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Egypt
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Ghana
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Ivory Coast
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Kenya
                </Link>
              </span>
              <span className="flex flex-col gap-1.5">
                <Link href="" className="hover:underline duration-100 w-max">
                  Morocco
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Senegal
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Tunisia
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Uganda
                </Link>
                <Link href="" className="hover:underline duration-100 w-max">
                  Zando
                </Link>
              </span>
            </div>
          </div>

          {/* join us on... */}
          <div className="flex flex-col gap-4">
            <p className="uppercase font-semibold">JOIN US ON</p>
            <span className="flex gap-8 items-center">
              <Link
                href=""
                title="Facebook Jumia Nigeria"
                className="hover:text-jumia-primary duration-200"
              >
                <FaFacebookF className="size-6" />
              </Link>
              <Link
                href=""
                title="Youtube Jumia Nigeria"
                className="hover:text-jumia-primary duration-200"
              >
                <FaYoutube className="size-6" />
              </Link>
              <Link
                href=""
                title="Instagram Jumia Nigeria"
                className="hover:text-jumia-primary duration-200"
              >
                <ImInstagram className="size-5" />
              </Link>
              <Link
                href=""
                title="Live Help on Twitter Jumia Nigeria"
                className="hover:text-jumia-primary duration-200"
              >
                <FaTwitter className="size-6" />
              </Link>
            </span>
          </div>

          {/* payment methods and Delivery partners */}
          <div className="flex flex-col gap-4 md:col-span-2 md:w-max">
            <p className="uppercase font-semibold">
              PAYMENT METHODS & DELIVERY PARTNERS
            </p>
            <div className="flex flex-wrap gap-4 md:gap-8 items-center">
              <Link
                href=""
                title="Payment on delivery"
                className="hover:text-jumia-primary duration-200"
              >
                <GiReceiveMoney className="size-6" />
              </Link>
              <Link
                href=""
                title="Mastercard"
                className="hover:text-jumia-primary duration-200"
              >
                <span className="flex flex-col justify-center items-center">
                  <SiMastercard className="size-8" />
                  <p className="text-[8px] -mt-2">mastercard</p>
                </span>
              </Link>
              <Link
                href=""
                title="Visa"
                className="hover:text-jumia-primary duration-200"
              >
                <RiVisaLine className="size-8" />
              </Link>
              <Link
                href=""
                title="Verve"
                className="hover:text-jumia-primary duration-200"
              >
                Verve
              </Link>
              <Link
                href=""
                title="Interswitch"
                className="hover:text-jumia-primary duration-200"
              >
                Interswitch
              </Link>
              <Link
                href=""
                title="DHL"
                className="hover:text-jumia-primary duration-200"
              >
                <FaDhl className="size-16" />
              </Link>
              <Link
                href=""
                title="MAX"
                className="hover:text-jumia-primary duration-200"
              >
                MAX
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 px-2 pt-4 flex items-center justify-center">
          <Link href="">
            <JumiaPay />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
