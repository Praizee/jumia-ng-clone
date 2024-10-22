import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400-1.png",
    name: "Tech Accessories",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400.png",
    name: "Men Fashion",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400-4.jpg",
    name: "Appliances",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400.jpg",
    name: "Home Essentials",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400-4-.jpg",
    name: "Beauty Corner",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-0-black-friday/2024/Teasing-deals/300x400__1.jpg",
    name: "Women Fashion",
    link: "",
  },
];

const DealsToExpect = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto bg-white shadow-sm rounded-md">
      <div className="p-3 bg-black text-white rounded-t-md text-center">
        <p className="text-lg font-semibold">Black Friday Deals To Expect</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md shadow-sm p-2">
        {categories.map((category, index) => (
          <div key={index} className="hover:scale-[102%]">
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md w-full 2xl:h-[245px] object-center"
                width={184}
                height={245.32}
                alt={category.name}
                quality={90}
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsToExpect;
