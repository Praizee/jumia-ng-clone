import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/laptops_300x400.png",
    name: "Tech Accessories",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/smartphones_300x400.png",
    name: "Men Fashion",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/lifestyle_300x400.jpg",
    name: "Appliances",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/powerbanks_300x400.png",
    name: "Home Essentials",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/wristwatches_300x400.png",
    name: "Beauty Corner",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-category-pages/0-all-category/portable-power_300x400.png",
    name: "Women Fashion",
    link: "",
  },
];

const TopSearched = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="p-3 bg-[#AADEF1] text-[#313133] rounded-t-md text-center">
        <p className="text-lg font-semibold">Top Searched</p>
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

export default TopSearched;