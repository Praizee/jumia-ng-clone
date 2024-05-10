"use client";

import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-6 bg-white p-2 rounded-full text-black shadow-md hover:bg-white/90 duration-150 border border-[#ED9720] focus:outline-none focus:bg-orange-200`}
    >
      <BiChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollButton;
