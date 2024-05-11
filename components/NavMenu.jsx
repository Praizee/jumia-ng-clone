"use client";
import Link from "next/link";
import { LuApple } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoEyedropOutline,
} from "react-icons/io5";
import {
  PiDotsThreeCircleThin,
  PiBaby,
  PiTShirt,
  PiTelevision,
  PiCookingPotLight,
} from "react-icons/pi";
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

const navItems = [
  { title: "supermarket", Icon: LuApple, link: "" },
  { title: "health & beauty", Icon: IoEyedropOutline, link: "" },
  { title: "home & office", Icon: IoHomeOutline, link: "" },
  { title: "appliances", Icon: PiCookingPotLight, link: "" },
  { title: "phones & tablets", Icon: HiOutlineDevicePhoneMobile, link: "" },
  { title: "computing", Icon: HiOutlineComputerDesktop, link: "" },
  { title: "electronics", Icon: PiTelevision, link: "" },
  { title: "fashion", Icon: PiTShirt, link: "" },
  { title: "baby products", Icon: PiBaby, link: "" },
  { title: "gaming", Icon: IoGameControllerOutline, link: "" },
  { title: "sporting goods", Icon: CiDumbbell, link: "" },
  { title: "other categories", Icon: PiDotsThreeCircleThin, link: "" },
];

export default function NavMenu() {
  return (
    <div className="max-h-[384px]">
      <ul className="hidden lg:flex flex-col gap-2 min-w-[206px] h-full py-2 justify-between rounded-md bg-white">
        {navItems.map(({ title, Icon, link }, index) => (
          <Link key={index} href={link}>
            <li className="capitalize text-left px-2 hover:text-[#f68b1e] w-full flex space-x-1.5 items-center text-xs">
              <Icon className="w-5 h-5" />
              <p>{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
