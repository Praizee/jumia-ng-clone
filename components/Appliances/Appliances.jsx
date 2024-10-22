import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/6.png",
    name: "Fans",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/1.png",
    name: "Washing Machine",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/3.png",
    name: "Air Conditioner",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/5.png",
    name: "Freezer & Fridges",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/4.png",
    name: "Blender",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/appliances/2.png",
    name: "Microwave",
    link: "",
  },
];

const Appliances = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="p-3 bg-[#65B4D3] text-[#313133] rounded-t-md text-center">
        <p className="text-lg font-semibold">Appliances</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md shadow-sm p-2">
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

export default Appliances;
