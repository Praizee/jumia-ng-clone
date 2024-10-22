import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/6.gif",
    name: "New Arrival",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/clearance-sales.png",
    name: "Clearance Sale",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/appliances.png",
    name: "Appliances Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/phones.png",
    name: "Phones & Tablets Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/fashion.gif",
    name: "Fashion Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/Make-extra-cash-GIF0.gif",
    name: "Make Extra Cash",
    link: "",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md shadow-sm p-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white pb-2 rounded-b-md hover:scale-[101%] hover:shadow-md"
          >
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md w-full"
                width={200}
                height={200}
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

export default FeaturedCategories;
