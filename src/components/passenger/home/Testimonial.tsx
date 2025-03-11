"use client";

import Carousel from "./carousel/Carousel";

const Testimonial = () => {
  return (
    <section className="relative py-12 w-full md:w-[95%] lg:w-[90%] mt-8 lg:mt-12 mx-auto bg-white h-full">
      <h4 className="text-[#333] text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-center mb-8"> TESTIMONIALS </h4>
      <Carousel />
    </section>
  );
};

export default Testimonial;
