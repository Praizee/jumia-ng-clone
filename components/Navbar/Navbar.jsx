"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky">
      <div className="flex justify-between items-center py-4 max-w-[1200px] mx-auto">
        <Image
          className="w-[100px] lg:w-[150px] object-cover"
          src="https://www.jumia.com.ng/assets_he/logo_jumia.svg"
          width={500}
          height={200}
          alt="Jumia logo"
        />
        <div className="flex flex-1 gap-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full pl-16 flex gap-2"
          >
            <div className="relative w-full">
              <IoMdSearch className="absolute top-0 bottom-0 w-7 h-7 my-auto text-gray-500 left-3" />
              <input
                type="text"
                placeholder="Search"
                required
                className="w-full min-w-8xl py-2 pl-12 pr-4 text-gray-500 border border-stone-500 rounded-[5px] outline-none bg-transparent focus:bg-white focus:border-[#E07E22]"
              />
            </div>
            <button
              type="submit"
              className="uppercase bg-[#ED9720] text-white rounded-[5px] px-4 py-2 font-semibold shadow-lg"
            >
              Search
            </button>
          </form>
          <Dropdown
            color="light"
            label={
              <div className="flex gap-2 text-base items-center">
                {" "}
                <FaRegUser className="w-6 h-6" />
                Account
              </div>
            }
            theme={{
              floating: {
                target:
                  "border-none px-0 hover:bg-white font-semibold flex items-center justify-center duration-0 hover:text-[#ED9720] focus:text-current focus:ring-0",
              },
            }}
            className=""
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown>

          <Dropdown
            color="light"
            label={
              <div className="flex gap-2 text-base items-center">
                <MdHelpOutline className="w-6 h-6" /> Help
              </div>
            }
            theme={{
              floating: {
                target:
                  "border-none px-0 hover:bg-white font-semibold flex items-center justify-center duration-0 hover:text-[#ED9720] focus:text-current focus:ring-0",
              },
            }}
            className=""
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown>

          <Link
            href=""
            className="px-4 py-2 flex gap-2 font-semibold text-base hover:text-[#ED9720]"
          >
            <HiOutlineShoppingCart className="w-6 h-6" />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
