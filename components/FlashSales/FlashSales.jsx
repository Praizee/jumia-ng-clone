import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { PiLightningLight } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import Countdown from "../CountDown/CountDown";

const items = [
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/4939272/1.jpg?1066",
    name: "Foldable Electric Bucket Water Pump Water Dispenser",
    link: "",
    price: "₦ 5,730",
    discount: "58%",
    slashed: "₦ 13,610",
    quantity: "33",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/6723401/1.jpg?0883",
    name: "NIVEA Black &amp; White Invisible Original Anti-Perspirant Spray For Men, 48h - 200ml (Pack Of 2)",
    link: "",
    price: "₦ 7,520",
    discount: "20%",
    slashed: "₦ 9,400",
    quantity: "14",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/0160591/1.jpg?8605",
    name: "ADIDAS No-Show Socks 3 Pairs Unisex",
    link: "",
    price: "₦ 5,645",
    discount: "60%",
    slashed: "₦ 14,113",
    quantity: "178",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/6022852/1.jpg?0899",
    name: "3 Pcs T-Shirts Men's Fashion Short Sleeve",
    link: "",
    price: "₦ N 7,699 - ₦ 8,800",
    discount: "39%",
    slashed: "₦ 12,650",
    quantity: "8",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/4484652/1.jpg?8299",
    name: "ASHION Modal Fibres Mens Panties Underpant Underwear 4-piece",
    link: "",
    price: "₦ 5,900",
    discount: "65%",
    slashed: "₦ 17,000",
    quantity: "12",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/9748652/1.jpg?4313",
    name: "Power Strip 6 Surge Protection Outlets 3 USB &amp; 1 Type-C Port",
    link: "",
    price: "₦ 5,310",
    discount: "59%",
    slashed: "₦ 13,070",
    quantity: "22",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/5092952/1.jpg?3240",
    name: "Phone Cooler Wireless Silent Cooling Clip For Gaming",
    link: "",
    price: "₦ 6,320",
    discount: "56%",
    slashed: "₦ 14,440",
    quantity: "50",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/8879221/1.jpg?4838",
    name: "Men's Cotton Boxer Briefs Four-Pack-Multicolor",
    link: "",
    price: "₦ 6,099 - ₦ 6,990",
    discount: "53%",
    slashed: "₦ 12,888",
    quantity: "37",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4052711/1.jpg?4729",
    name: "Denim Jacket Korean Casual Jacket Youth Trend Hooded Couple-Light Blue",
    link: "",
    price: "₦ 10,899",
    discount: "43%",
    slashed: "₦ 19,000",
    quantity: "128",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/812128/1.jpg?4334",
    name: "Anti Blue Light Blocking Glasses For Computer And Phone",
    link: "",
    price: "₦ 3,199",
    discount: "43%",
    slashed: "₦ 5,600",
    quantity: "25",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/4873621/1.jpg?1656",
    name: "Men's Sneakers Lace Up Shoes",
    link: "",
    price: "₦ 7,899 - ₦ 8,900",
    discount: "26%",
    slashed: "₦ 10,000 - ₦ 10,652",
    quantity: "29",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/4666952/1.jpg?1838",
    name: "Lee Buy Metal Rechargeable Hair Clipper Cordless Hair Cut With LCD Display",
    link: "",
    price: "₦ 17,799",
    discount: "26%",
    slashed: "₦ 24,000",
    quantity: "30",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/6945362/1.jpg?6394",
    name: "New Trend Design Sports Shoes Casual Shoes - Beige",
    link: "",
    price: "₦ 8,799",
    discount: "158%",
    slashed: "₦ 21,000",
    quantity: "2",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/8920952/1.jpg?2121",
    name: "BT Selfie Stick Foldable Tripod 360° Rotation",
    link: "",
    price: "₦ 4,060",
    discount: "56%",
    slashed: "₦ 9,240",
    quantity: "50",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/1575552/1.jpg?8919",
    name: "T-Wolf Thunder Wolf Q13 Charging Mute Wireless Mouse",
    link: "",
    price: "₦ 7,460",
    discount: "60%",
    slashed: "₦ 18,680",
    quantity: "45",
  },
];

const FlashSales = () => {
  return (
    <section className="xl:max-w-[1200px] max-w-[950px] mx-auto bg-white shadow-sm rounded-md">
      <div className="flex gap-8 justify-between p-3 bg-[#E61601] text-white rounded-t-md">
        <span className="lg:flex hidden gap-2 items-center">
          {/* <PiLightningLight className="w-6 h-6 text-jumia-primary" /> */}
          <IoPricetags className="w-6 h-6 text-[#F2BA14]" />
          <p className="text-lg font-semibold">Flash Sale</p>
        </span>
        <div className="flex flex-col gap-1 lg:hidden">
          <span className="flex gap-2 items-center">
            {/* <PiLightningLight className="w-6 h-6 text-jumia-primary" /> */}
            <IoPricetags className="w-6 h-6 text-[#F2BA14]" />
            <p className="text-[14px] md:text-lg font-semibold">Flash Sale</p>
          </span>
          <p className="text-[14px] md:text-lg font-medium flex gap-2">
            Time Left:
            <Countdown />
          </p>
        </div>
        <p className="text-lg font-medium hidden lg:flex gap-2">
          Time Left:
          <Countdown />
        </p>
        <Link
          href=""
          className="text-sm font-semibold uppercase  flex gap-0.5 items-center"
        >
          See All
          <BiChevronRight className="size-5" />
        </Link>
      </div>
      <div className="flex gap-x-2 overflow-x-scroll p-2">
        {items.map((category, index) => (
          <div className="relative" key={index}>
            <div className="max-w-[200px] w-full bg-white pb-2 rounded-b-md hover:scale-[101%] hover:shadow-md">
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
                <div className="space-y-0.5 px-2">
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
                  <p className="text-[12.5px]">
                    {category.quantity} items left
                  </p>
                  <div className="rounded-md bg-[#C7C7CD] h-2">
                    <div className="w-[70%] bg-[#EC8A23]  rounded-l-md h-2" />
                    {/* background for low quantity                     bg-[#B82322] */}
                  </div>
                </div>
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

export default FlashSales;
