"use client";

import { useEffect, useState } from "react";
import style from "../../styles/testimonial.module.scss";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import TestimonialCard from "./cards/TestimonialCard";
import { testimonialData } from "./data/data";

const Testimonial = () => {
  let [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLeftArrow = () => {
    if (window.innerWidth <= 767) {
      setCurrentSlide((currentSlide) =>
        currentSlide === 0 ? currentSlide : currentSlide - 1
      );
    } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
      setCurrentSlide((currentSlide) =>
        currentSlide === 0 ? currentSlide : currentSlide - 2
      );
    } else {
      setCurrentSlide((currentSlide) =>
        currentSlide === 0 ? currentSlide : currentSlide - 3
      );
    }
  };

  const handleRightArrow = () => {
    if (window.innerWidth <= 767) {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonialData.length - 1 ? 0 : currentSlide + 1
      );
    } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonialData.length - 2 ? 0 : currentSlide + 2
      );
    } else {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonialData.length - 3 ? 0 : currentSlide + 3
      );
    }
  };

  return (
    <section className={style.testimonials}>
      <h4 className="text-[#121212] text-[32px] font-semibold tracking-[-0.03em] text-center mb-10 mt-0 pt-[60px] font-inter">
        What people are saying about us
      </h4>
      <div className="flex overflow-hidden w-[90%] relative mx-auto shadow-[0px_4px_16px_16px_rgba(0,0,0,0.02)]">
        {testimonialData.map((testimonial, index) => {
          return ( 
            <div key={index} 
              className="w-full md:w-[50%] lg:w-[33%] min-h-[244px] shadow-lg p-2.5 font-['Inter'] bg-white"
              style={ currentSlide === 0 ? { transition: "0s" } : { transform: `translateX(${-currentSlide * 100}%)`, transition: "all 1s ease-out" } }
            >
              <TestimonialCard
                img={testimonial.img}
                name={testimonial.name}
                date={testimonial.date}
                text={testimonial.text}
              />
            </div>
          );
        })}
      </div>
      <div className="icon-container">
        <CircleChevronLeft onClick={handleLeftArrow} className="icon" />
        <CircleChevronRight onClick={handleRightArrow} className="icon" />
      </div>
    </section>
  );
};

export default Testimonial;
