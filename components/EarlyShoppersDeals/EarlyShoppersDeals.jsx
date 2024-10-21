import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1.png",
    name: "Tech Accessories",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1-copy.png",
    name: "Men Fashion",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1copy5.png",
    name: "Appliances",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1copy-3.png",
    name: "Home Essentials",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1copy4.png",
    name: "Beauty Corner",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/Artboard-1copy2.png",
    name: "Women Fashion",
    link: "",
  },
];

const EarlyShoppersDeals = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="p-3 bg-black text-white rounded-t-md text-center">
        <p className="text-lg font-semibold">Early Shoppers Deals</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md p-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white pb-2 rounded-b-md hover:scale-[102%] hover:shadow-lg"
          >
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md w-full 2xl:h-[245px] object-center"
                width={184}
                height={245}
                alt={category.name}
                quality={90}
                priority
              />
              <p className="text-sm text-center">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarlyShoppersDeals;
