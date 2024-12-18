"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChatLeftDots } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Sider } from "./Sider";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 bg-white space-y-1 pb-3 md:pb-0">
      <div className="flex justify-between px-4 lg:px-0 items-center py-4 xl:max-w-[1200px] max-w-[950px] mx-auto">
        <div className="flex gap-3 md:gap-0">
          {/* Sider */}
          <Sider />

          {/* <button type="button">
            <RxHamburgerMenu className="w-6 h-6 md:hidden block" />
          </button> */}

          <Image
            className="w-[100px] lg:w-[150px] object-contain"
            src="https://www.jumia.com.ng/assets_he/logo_jumia.svg"
            width={500}
            height={200}
            alt="Jumia logo"
          />
        </div>
        <div className="flex md:flex-1 gap-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full pl-16 md:flex hidden gap-2"
          >
            <div className="relative w-full">
              <IoMdSearch className="absolute top-0 bottom-0 size-7 my-auto text-gray-500 left-3" />
              <input
                type="text"
                placeholder="Search products, brands and categories"
                required
                className="w-full min-w-8xl py-2 pl-12 pr-4 text-gray-500 border rounded-[5px] outline-none bg-transparent focus:bg-white focus:border-transparent focus:ring-jumia-primary"
              />
            </div>
            <button
              type="submit"
              className="uppercase bg-jumia-primary text-white rounded-[5px] px-4 py-2 font-semibold shadow-lg"
            >
              Search
            </button>
          </form>

          <Dropdown
            // inline={true}
            color="light"
            label={
              <div className="flex gap-2 text-base items-center">
                {" "}
                <FaRegUser className="size-5 md:size-6" />
                <p className="hidden md:block">Account</p>
              </div>
            }
            theme={{
              floating: {
                target:
                  "border-none max-w-7 sm:max-w-32 mr-2 sm:mr-0 hover:bg-white font-semibold flex items-center justify-center duration-0 hover:text-jumia-primary focus:text-current focus:ring-0",
              },
            }}
            className=""
          >
            <Dropdown.Item>
              <Link
                href="/auth"
                className="uppercase bg-jumia-primary w-full text-white rounded-[5px] px-4 py-2 font-semibold shadow-lg"
              >
                Sign In
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="flex gap-4 hover:font-semibold">
              <FaRegUser className="size-5" />
              <Link href="" className="text-[14px]">
                My Account
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="flex gap-4 hover:font-semibold">
              <BsBox2 className="size-5" />
              <Link href="" className="text-[14px]">
                Orders
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="flex gap-4 hover:font-semibold">
              <FaRegHeart className="size-5" />
              <Link href="" className="text-[14px]">
                Saved Items
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            color="light"
            label={
              <div className="flex gap-2 text-base items-center">
                <MdHelpOutline className="md:size-6 size-5" />
                <p className="hidden md:block">Help</p>
              </div>
            }
            theme={{
              floating: {
                target:
                  "border-none max-w-7 sm:max-w-32 ml-2 sm:ml-0 hover:bg-white font-semibold hidden md:flex items-center justify-center duration-0 hover:text-jumia-primary focus:text-current focus:ring-0",
              },
            }}
            className=""
          >
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Place an order
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Payment options
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Track an order
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Cancel an order
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Returns & Refunds
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:font-semibold">
              <Link href="" className="text-[14px]">
                Help Center
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <button
                type="button"
                className="uppercase flex gap-2 items-center bg-jumia-primary w-full text-white rounded-[5px] px-4 py-2 font-semibold shadow-lg"
              >
                <BsChatLeftDots className="size-5 my-auto" />
                Live Chat
              </button>
            </Dropdown.Item>
          </Dropdown>

          <Link
            href=""
            className="px-4 py-2 flex gap-2 font-semibold text-base hover:text-jumia-primary"
          >
            <HiOutlineShoppingCart className="md:size-6 size-5" />
            <p className="hidden md:block">Cart</p>
          </Link>
        </div>
      </div>

      {/* mobile search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full px-4 flex md:hidden gap-2"
      >
        <div className="relative w-full">
          <IoMdSearch className="absolute top-0 bottom-0 size-7 my-auto text-gray-800 left-3" />
          <input
            type="text"
            placeholder="Search products, brands and categories"
            required
            className="w-full min-w-8xl py-1 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-transparent focus:bg-white focus:border-transparent focus:ring-jumia-primary"
          />
        </div>
        {/* <button
          type="submit"
          className="uppercase bg-jumia-primary text-white rounded-[5px] px-4 py-2 font-semibold shadow-lg"
        >
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Navbar;
