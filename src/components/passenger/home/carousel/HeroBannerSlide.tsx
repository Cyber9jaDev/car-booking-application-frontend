"use client";

import { useState, useEffect } from "react";
import { heroBannerSlides } from "../data/data";
import HeroBannerSlideCard from "../cards/HeroBannerSlideCard";

export default function HeroBannerSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroBannerSlides.length;

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="relative h-screen w-screen mx-auto">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroBannerSlides.map((banner) => (
          <HeroBannerSlideCard key={banner.title} {...banner} />
        ))}
      </div>
    </div>
  );
}
