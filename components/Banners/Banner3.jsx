import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    image:
      "https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/September/572X250-1.jpg",
    alt: "NGN750 0FF",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week_43/Global_push/glob.png",
    alt: "30% OFF",
    link: "",
  },
];

const Banner3 = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto bg-white shadow-sm rounded-md">
      <div className="flex gap-2 justify-between p-2">
        {items.map((category, index) => (
          <div
            key={index}
            className="w-full flex-1 bg-white rounded-b-md hover:scale-[102%] duration-150 hover:shadow-lg"
          >
            <Link href={category.link}>
              <Image
                src={category.image}
                className="rounded-md w-full bg-contain bg-no-repeat"
                width={572}
                height={250.25}
                alt={category.alt}
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

export default Banner3;
