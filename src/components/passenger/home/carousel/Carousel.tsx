"use client";

import { useEffect, useState } from "react";
import CarouselCard from "../cards/CarouselCard";
import { testimonialData } from "../data/data";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Autoscroll
  useEffect(() => {
    const timerId = setInterval(() => {
      const maxSlide = testimonialData.length - cardsPerView;
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(timerId);
    };
  }, [currentSlide, cardsPerView]);

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
  }, [cardsPerView]);

  return (
    <section>
      <div className="flex overflow-hidden h-full w-full relative mx-auto bg-white">
        <div
          className="flex transition-transform duration-1000 ease-out w-full"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonialData.map(({ id, image, name, role, text }) => (
            <div
              key={id}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="lg:p-2.5">
                <CarouselCard
                  id={id}
                  image={image}
                  name={name}
                  role={role}
                  text={text}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
