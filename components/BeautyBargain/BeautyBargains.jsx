import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const items = [
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/6996252/1.jpg?7662",
    name: "Full Touch Screen Smart Watch - Health Detection",
    link: "",
    price: "₦ 15,800",
    discount: "60%",
    slashed: "₦ 39,999",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/0366082/1.jpg?0244",
    name: "itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power",
    link: "",
    price: "₦ 17,958",
    discount: "44%",
    slashed: "₦ 32,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/3732962/1.jpg?9284",
    name: "XIAOMI Redmi 13C 6.74'' 6GB RAM/128GB ROM Android 12 - Green",
    link: "",
    price: "₦ 147,592",
    discount: "11%",
    slashed: "₦ 165,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7967",
    name: "itel 20000mAh Dual Output Fast Charging Power Bank",
    link: "",
    price: "₦ 15,500",
    discount: "23%",
    slashed: "₦ 20,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/994623/1.jpg?3863",
    name: "Men's Large Size Love Pattern Business Casual Formal Shoes-BLUE",
    link: "",
    price: "₦ 2,339",
    discount: "50%",
    slashed: "₦ 4,657",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/5742312/1.jpg?8228",
    name: "GUIXIA  Tws Wireless Bluetooth Headsets Earphones I12",
    link: "",
    price: "₦ 3,299",
    discount: "38%",
    slashed: "₦ 5,292",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/4661052/1.jpg?9292",
    name: "Oraimo FreePods Lite 40-hour Playtime ENC True Wireless Earbuds",
    link: "",
    price: "₦ 19,800",
    discount: "34%",
    slashed: "₦ 30,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/5007252/1.jpg?9728",
    name: "S20 Wireless Bluetooth Earphone Touch LED Stereo Audio Black",
    link: "",
    price: "₦ 7,299",
    discount: "45%",
    slashed: "₦ 13,335",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/3174372/1.jpg?8523",
    name: "XIAOMI Redmi 13C 6.74'' 8GB RAM/256GB ROM Android 12-Midnight Black",
    link: "",
    price: "₦ 162,778",
    discount: "7%",
    slashed: "₦ 175,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/9596852/1.jpg?6106",
    name: "Men Shoes Men Sneakers Shoes",
    link: "",
    price: "₦ 3,823 - ₦ 3,890",
    discount: "35%",
    slashed: "₦ 5,900",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/6931721/1.jpg?8750",
    name: "Oraimo 20000mAh Power Charging Bank Fast Charging OPB-P208DN",
    link: "",
    price: "₦ 22,000",
    discount: "44%",
    slashed: "₦ 38,980",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/7737652/1.jpg?0565",
    name: "itel 20000mAh  Mobile Power Charge Bank",
    link: "",
    price: "₦ 15,616",
    discount: "16%",
    slashed: "₦ 18,500",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/5101392/1.jpg?3384",
    name: "Qasa Solar Power Portable 148Wh(40000mAh/3.7V) 220W SPP-220",
    link: "",
    price: "₦ 189,000",
    discount: "14%",
    slashed: "₦ 220,000",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/7942952/1.jpg?8019",
    name: "GUIXIA  F9 Wireless Headset Bluetooth Earphone True Bass With Power Bank",
    link: "",
    price: "₦ 3,999",
    discount: "32%",
    slashed: "₦ 5,863",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/5667461/1.jpg?1229",
    name: "DCQ D1 Power Banks 10000MAh Utra Slim Portable Fast Charger",
    link: "",
    price: "₦ 7,000",
    discount: "13%",
    slashed: "₦ 8,084",
  },
];

const BeautyBargains = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto bg-white shadow-sm rounded-md">
      <div className="flex gap-8 justify-between p-3 bg-[#65B4D3] text-[#313133] rounded-t-md">
        <p className="text-lg font-semibold">Beauty Bargains </p>
        <Link
          href=""
          className="text-sm font-semibold uppercase flex gap-0.5 items-center"
        >
          See All
          <BiChevronRight className="size-5" />
        </Link>
      </div>
      <div className="flex gap-x-2 overflow-x-scroll p-2">
        {items.map((category, index) => (
          <div className="relative" key={index}>
            <div className="max-w-[200px] w-full bg-white pb-2 rounded-b-md hover:scale-[102%] hover:shadow-lg">
              <Link href={category.link} className="flex flex-col gap-2">
                <Image
                  src={category.image}
                  className="rounded-md"
                  width={230}
                  height={200}
                  alt={category.name}
                  quality={90}
                  priority
                />
                <span className="space-y-0.5 px-2">
                  <p
                    title={category.name}
                    className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    {category.name}
                  </p>
                  <p className="text-base font-semibold">{category.price}</p>
                  <p className="text-[12.5px] text-gray-500 line-through">
                    {category.slashed}
                  </p>
                </span>
              </Link>
            </div>
            <span className="absolute top-2 right-2 bg-[#FEF3E9] text-jumia-primary text-sm p-0.5 rounded-sm">
              <p className="">-{category.discount}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeautyBargains;
