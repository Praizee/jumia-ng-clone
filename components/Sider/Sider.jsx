"use client";

import { useState } from "react";
import { Drawer } from "flowbite-react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { LuApple } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoEyedropOutline,
} from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import {
  PiBaby,
  PiTShirt,
  PiTelevision,
  PiCookingPotLight,
  PiCar,
    PiDotsThreeCircleThin,
} from "react-icons/pi";
import { BsBox2 } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";

import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ourCategories = [
  { title: "appliances", Icon: PiCookingPotLight, link: "" },
  { title: "phones & tablets", Icon: HiOutlineDevicePhoneMobile, link: "" },
  { title: "health & beauty", Icon: IoEyedropOutline, link: "" },
  { title: "home & office", Icon: IoHomeOutline, link: "" },
  { title: "electronics", Icon: PiTelevision, link: "" },
  { title: "fashion", Icon: PiTShirt, link: "" },
  { title: "supermarket", Icon: LuApple, link: "" },
  { title: "computing", Icon: HiOutlineComputerDesktop, link: "" },
  { title: "baby products", Icon: PiBaby, link: "" },
  { title: "gaming", Icon: IoGameControllerOutline, link: "" },
  { title: "Musical Instruments", link: "" },
  { title: "other categories", Icon: PiDotsThreeCircleThin, link: "" },
  // { title: "sporting goods", Icon: CiDumbbell, link: "" },
  // { title: "automobile", Icon: PiCar, link: "" },
];

const myAccount = [
  { title: "orders", Icon: BsBox2, link: "" },
  { title: "pending reviews", Icon: MdOutlineMarkUnreadChatAlt, link: "" },
  { title: "voucher", Icon: BiSolidDiscount, link: "" },
  { title: "saved items", Icon: FaRegHeart, link: "" },
];

const ourServices = [
  { title: "j-force", Icon: MdStars, link: "" },
  { title: "pay airtime & bills", Icon: MdStars, link: "" },
  { title: "pay electricity bills", Icon: MdStars, link: "" },
  { title: "pay internet bills", Icon: MdStars, link: "" },
  { title: "buy data", Icon: MdStars, link: "" },
];

export function Sider() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu className="w-6 h-6 md:hidden block" />
      </button>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="!z-[1000] p-0"
        bodyScrolling={false}
      >
        {/* <Drawer.Header title="Drawer" /> */}

        <section>
          <div className="flex gap-2 p-3 py-2">
            {/* close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center"
            >
              <IoCloseSharp className="w-7 h-7" />
            </button>
            {/* logo */}
            <span className="inline-flex items-center">
              <Link href="" className="">
                <Image
                  className=" w-[100px] object-contain h-auto"
                  src="/jumia-logo.png"
                  width={200}
                  height={200}
                  alt="Jumia logo"
                />
              </Link>
            </span>
          </div>

          {/* content/links */}
          <div className="overflow-y-scroll flex flex-col w-full">
            {/* h-screen */}
            <div className="pb-1 pt-1 border-t border-gray-400">
              <Link
                href=""
                className="flex items-center justify-between px-4 py-3 focus:bg-[#FEE2CC] active:bg-[#FEE2CC]"
              >
                <p className="uppercase text-sm text-gray-700">need help?</p>
                <FaChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* account */}
            <div className="pb-3 pt-1 border-t border-gray-400">
              <Link
                href=""
                className="flex items-center justify-between px-4 py-3 focus:bg-[#FEE2CC] active:bg-[#FEE2CC]"
              >
                <p className="uppercase text-sm text-gray-700">
                  my jumia account
                </p>
                <FaChevronRight className="h-4 w-4" />
              </Link>
              <ul className="pt-1">
                {myAccount.map(({ title, Icon, link }) => (
                  <Link key={title} href={link}>
                    <li className="capitalize py-3 text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      <Icon className="h-5 w-5" />
                      <p>{title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* categories */}
            <div className="pb-3 pt-1 border-t border-gray-400">
              <Link
                href=""
                className="flex items-center justify-between px-4 py-3 focus:bg-[#FEE2CC] active:bg-[#FEE2CC]"
              >
                <p className="uppercase text-sm text-gray-700">
                  our categories
                </p>
                <p className="capitalize text-sm text-[#f68b1e]">see all</p>
              </Link>

              <ul className="pt-1">
                {ourCategories.map(({ title, Icon, link }) => (
                  <Link key={title} href={link}>
                    <li className="capitalize py-3 text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      {Icon && <Icon className="h-5 w-5" />}
                      <p className={Icon ? "" : "ml-8"}>{title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* services */}
            <div className="pb-3 pt-1 border-t border-gray-400">
              <Link
                href=""
                className="flex items-center justify-between px-4 py-3 focus:bg-[#FEE2CC] active:bg-[#FEE2CC]"
              >
                <p className="uppercase text-sm text-gray-700">our services</p>
                <p className="capitalize text-sm text-[#f68b1e]">see all</p>
              </Link>

              <ul className="pt-1">
                {ourServices.map(({ title, Icon, link }) => (
                  <Link key={title} href={link}>
                    <li className="capitalize py-3 text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      <Icon className="h-5 w-5 text-gray-600" />
                      <p>{title}</p>
                    </li>
                  </Link>
                ))}
                <span className="flex flex-col py-2">
                  <Link href="">
                    <li className="capitalize text-left px-4 py-3 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      Sell on Jumia
                    </li>
                  </Link>
                  <Link href="">
                    <li className="capitalize text-left px-4 py-3 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      Service Center
                    </li>
                  </Link>
                  <Link href="">
                    <li className="capitalize text-left px-4 py-3 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-sm focus:bg-[#FEE2CC] active:bg-[#FEE2CC]">
                      Contact Us
                    </li>
                  </Link>
                </span>
              </ul>
            </div>
          </div>
        </section>
      </Drawer>
    </>
  );
}
