import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/renewed.jpg",
    name: "Starting from ₦65,000",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/special-offer.png",
    name: "Special Offers",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/electronic.png",
    name: "Electronic Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/beauty.png",
    name: "Beauty Deals",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/home-essentials.png",
    name: "Home Essentials",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/The_Essentials_For_The_Week/2024/300X300_.jpg",
    name: "Essentials of the week",
    link: "",
  },
];

const FeaturedCategories2 = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md p-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white pb-2 rounded-b-md hover:scale-[102%] hover:shadow-lg"
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

export default FeaturedCategories2;
