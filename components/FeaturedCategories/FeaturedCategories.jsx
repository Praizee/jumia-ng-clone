import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1.png",
    name: "Clearance Sale",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_13.png",
    name: "Special Offers",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_2.png",
    name: "Phones & Tablets",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_5.png",
    name: "Televisions",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_6.png",
    name: "Fashion Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_9.png",
    name: "Refrigerators",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_4.png",
    name: "Grocery Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_3.png",
    name: "Computing Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_7.png",
    name: "Mobile Accessories",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_8.png",
    name: "Generators",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy.png",
    name: "Home Essentials",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Made-in-naija.jpg",
    name: "Made in Nigeria",
    link: "",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md p-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white pb-2 rounded-b-md hover:scale-[102%] hover:shadow-lg"
          >
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md"
                width={200}
                height={200}
                alt={category.name}
              />
              <p className="text-sm text-center">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
