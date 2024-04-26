"use client";

import { useState } from "react";
import { Button, Drawer } from "flowbite-react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { LuApple } from "react-icons/lu";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoEyedropOutline,
} from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import {
  PiDotsThreeCircleThin,
  PiBaby,
  PiTShirt,
  PiTelevision,
  PiCookingPotLight,
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

const navOptions = [
  { title: "supermarket", Icon: LuApple },
  { title: "health & beauty", Icon: IoEyedropOutline },
  { title: "home & office", Icon: IoHomeOutline },
  { title: "appliances", Icon: PiCookingPotLight },
  { title: "phones & tablets", Icon: HiOutlineDevicePhoneMobile },
  { title: "computing", Icon: HiOutlineComputerDesktop },
  { title: "electronics", Icon: PiTelevision },
  { title: "fashion", Icon: PiTShirt },
  { title: "baby products", Icon: PiBaby },
  { title: "gaming", Icon: IoGameControllerOutline },
  { title: "sporting goods", Icon: CiDumbbell },
  { title: "other categories", Icon: PiDotsThreeCircleThin },
];

const myAccount = [
  { title: "orders", Icon: BsBox2 },
  { title: "pending reviews", Icon: MdOutlineMarkUnreadChatAlt },
  { title: "voucher", Icon: BiSolidDiscount },
  { title: "saved items", Icon: FaRegHeart },
];

export function Sider() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu className="w-6 h-6 md:hidden block" />
      </button>

      {/* <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show drawer</Button>
      </div> */}
      <Drawer open={isOpen} onClose={handleClose} className="!z-[1000] p-0">
        {/* <Drawer.Header title="Drawer" /> */}

        <section>
          <div className="flex gap-2 border-b p-3 py-2">
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
              <Image
                className=" w-[100px] object-contain h-auto"
                src="/jumia-logo.png"
                width={200}
                height={200}
                alt="Jumia logo"
              />
            </span>
          </div>

          {/* content/links */}
          <div></div>
        </section>

        {/* <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a
              href="#"
              className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
            >
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Get access&nbsp;
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Drawer.Items> */}
      </Drawer>
    </>
  );
}
