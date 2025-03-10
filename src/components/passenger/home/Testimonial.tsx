"use client";

import style from "../../styles/testimonial.module.scss";
import Carousel from './carousel/Carousel';

const Testimonial = () => {

  return (
    <section className="py-12 w-[90%] mx-auto">
      <h4 className="text-[#121212] text-[32px] font-semibold tracking-[-0.03em] text-center mb-10 mt-0 pt-[60px] font-inter">
        What people are saying about us
      </h4>
      <Carousel />
    </section>
  );
};

export default Testimonial;