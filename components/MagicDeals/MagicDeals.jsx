import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/May/Updated/Desktop_Double_banner_572X250.jpg",
    alt: "MAGIC DEALS FSH",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/May/Updated/Desktop_Double_banner_572X250_FSH.jpg",
    alt: "MAGIC DEALS GEN",
    link: "",
  },
];

const MagicDeals = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto bg-white rounded-md">
      <div className="flex gap-2 justify-between p-2">
        {items.map((category, index) => (
          <div
            key={index}
            className="w-full flex-1 bg-white rounded-b-md hover:scale-[102%] hover:shadow-lg"
          >
            <Link href={category.link}>
              <Image
                src={category.image}
                className="rounded-md w-full bg-contain bg-no-repeat"
                width={572}
                height={250.25}
                alt={category.alt}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MagicDeals;
