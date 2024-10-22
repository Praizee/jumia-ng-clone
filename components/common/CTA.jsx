"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="fixed bottom-8 left-3 sm:left-12 z-50">
      <div className="relative rounded-lg sm:w-[320px] h-[200px]">
        <Link href="">
          <Image
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/October/Nivea-Super-Brand-Day/POP.gif"
            className="rounded-lg object-cover"
            width={320}
            height={200}
            alt="CTA"
            quality={90}
            priority
          />
        </Link>
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2"
        >
          <IoCloseCircle className="text-2xl text-gray-400" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
