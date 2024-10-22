import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/Phones_Tablets/Renewed-phones_378x252.png",
    name: "RENEWED PHONES",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/Phones_Tablets/Accessories_378x252.png",
    name: "ACCESSORIES",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/catgeory-triple-banner/Phones_Tablets/Andriod_378x252.png",
    name: "ANDROID",
    link: "",
  },
];

const PhoneTabletDeals = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="p-3 bg-[#65B4D3] text-[#313133] rounded-t-md text-center">
        <p className="text-lg font-semibold">Phones & Tablet Deals</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white rounded-md p-2">
        {categories.map((category, index) => (
          <div key={index} className="hover:scale-[102%]">
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md w-full object-center"
                width={378.68}
                height={252.46}
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

export default PhoneTabletDeals;
