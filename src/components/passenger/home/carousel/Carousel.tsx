"use client";

import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { testimonialData } from "../data/data";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 767) {
        setCardsPerView(1);
      } 
      else if (window.innerWidth > 767 && window.innerWidth <= 991) {
        setCardsPerView(2);
      } 
      else {
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
    <section>
      <div className="flex overflow-hidden w-full relative mx-auto shadow-[0px_4px_16px_16px_rgba(0,0,0,0.02)]">
        <div
          className="flex transition-transform duration-1000 ease-out w-full"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="p-2.5">
                <CarouselCard
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <CircleChevronLeft
          onClick={handleLeftArrow} size={40}
          className="text-[#121212] rounded-full text-base font-light cursor-pointer"
        />
        <CircleChevronRight size={40}
          onClick={handleRightArrow}
          className="text-[#121212] rounded-full text-base font-light cursor-pointer"
        />
      </div>
    </section>
  );
}
