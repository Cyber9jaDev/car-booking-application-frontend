"use client";

import { useEffect, useState } from "react";
import style from "../../styles/testimonial.module.scss";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import TestimonialCard from "./cards/TestimonialCard";
import { testimonialData } from "./data/data";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 767) {
        setCardsPerView(1);
      } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setCurrentSlide(0);
    };

    // Set initial cards per view
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLeftArrow = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleRightArrow = () => {
    const maxSlide = testimonialData.length - cardsPerView;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  return (
    <section className={style.testimonials}>
      <h4 className="text-[#121212] text-[32px] font-semibold tracking-[-0.03em] text-center mb-10 mt-0 pt-[60px] font-inter">
        What people are saying about us
      </h4>
      <div className="flex overflow-hidden w-[90%] relative mx-auto shadow-[0px_4px_16px_16px_rgba(0,0,0,0.02)]">
        <div 
          className="flex transition-transform duration-1000 ease-out w-full"
          style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
        >
          {testimonialData.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="p-2.5">
                <TestimonialCard
                  img={testimonial.img}
                  name={testimonial.name}
                  date={testimonial.date}
                  text={testimonial.text}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="icon-container mt-4 flex justify-center gap-4">
        <CircleChevronLeft onClick={handleLeftArrow} className="icon cursor-pointer" />
        <CircleChevronRight onClick={handleRightArrow} className="icon cursor-pointer" />
      </div>
    </section>
  );
};

export default Testimonial;