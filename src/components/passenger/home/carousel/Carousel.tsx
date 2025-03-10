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
      <div className="flex overflow-hidden h-full w-full relative mx-auto bg-white">
        <div
          className="flex transition-transform duration-1000 ease-out w-full"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonialData.map((testimonial, id) => (
            <div key={id} className="flex-shrink-0" style={{ width: `${100 / cardsPerView}%` }}>
              <div className="p-2.5">
                <CarouselCard
                  id={testimonial.id}
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
      <div className="flex justify-center mt-5 gap-6 bg-white h-full">
        <CircleChevronLeft
          onClick={handleLeftArrow} size={50}
          className="text-[#121212] rounded-full text-base font-light cursor-pointer"
        />
        <CircleChevronRight size={50}
          onClick={handleRightArrow}
          className="text-[#121212] rounded-full text-base font-light cursor-pointer"
        />
      </div>
    </section>
  );
}
