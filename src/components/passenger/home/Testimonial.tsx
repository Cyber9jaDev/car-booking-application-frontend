"use client";

import Carousel from "./carousel/Carousel";

const Testimonial = () => {
  return (
    <section className="py-12 w-[90%] mx-auto bg-white h-full">
      <h4 className="text-[#333] text-5xl font-extrabold tracking-[-0.03em] text-center mb-8 pt-[60px]">
        Testimonial
      </h4>
      <Carousel />
    </section>
  );
};

export default Testimonial;
