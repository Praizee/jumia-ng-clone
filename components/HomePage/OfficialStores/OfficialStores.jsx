import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/tecno.png",
    name: "Tecno Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/oraimo.png",
    name: "Oraimo Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/infinix.png",
    name: "Infinix Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/nivea.png",
    name: "Nivea Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/xiaomi.png",
    name: "Xiaomi Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/itel.png",
    name: "Itel Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/adidas.png",
    name: "Adidas Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/haier-thermoccol.png",
    name: "Haier Thermocool Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/diageo.png",
    name: "Diageo Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/pernord-ricard.png",
    name: "Pernod Ricard Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/bacrdi.png",
    name: "Bacardi Store",
    link: "",
  },
  {
    image:
      "https://ng.jumia.is/cms/0-5-brand-festival/2024/Brand-partners/Thumbnails/ecoflow.png",
    name: "Ecoflow Store",
    link: "",
  },
];

const OfficialStores = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto">
      <div className="p-3 bg-[#FCE7BB] text-[#313133] rounded-t-md text-center">
        <p className="text-lg font-semibold">Official Stores</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white rounded-md shadow-sm p-2">
        {categories.map((category, index) => (
          <div key={index} className="hover:scale-[102%]">
            <Link href={category.link} className="space-y-2">
              <Image
                src={category.image}
                className="rounded-md w-full object-center"
                width={184}
                height={184}
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

export default OfficialStores;
