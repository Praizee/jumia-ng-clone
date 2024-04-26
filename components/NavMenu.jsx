"use client";

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

export default function NavMenu() {
  return (
    <div className="max-h-[384px]">
      <ul className="hidden lg:flex flex-col gap-2 min-w-[206px] h-full py-2 justify-between rounded-md bg-white">
        {navOptions.map(({ title, Icon }) => (
          <li
            className="capitalize text-left px-2 hover:text-[#f68b1e] w-full flex space-x-1.5 items-center text-xs cursor-pointer"
            key={title}
          >
            <Icon className="w-5 h-5" />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
