import React from "react";
import Hero from "../Hero/Hero";

const HomePage = () => {
  return (
    <section className="md:bg-[#7999A8] bg-[#f1f1f2]">
      <Hero />

      <section className="min-h-screen  max-w-[1200px] mx-auto">
        <div>Home Page</div>
      </section>
    </section>
  );
};

export default HomePage;
