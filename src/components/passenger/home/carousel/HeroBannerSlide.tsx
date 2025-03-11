"use client";

import { useState, useEffect } from "react";
import { heroBannerSlides } from "../data/data";
import HeroBannerSlideCard from "../cards/HeroBannerSlideCard";

export default function HeroBannerSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = heroBannerSlides.length;

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      
      // Reset transition state after animation completes
      const transitionTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
      
      return () => clearTimeout(transitionTimer);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative h-screen w-screen mx-auto overflow-hidden">
      {/* We'll stack slides instead of putting them side by side */}
      {heroBannerSlides.map((banner, index) => (
        <div 
          key={banner.title}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? isTransitioning 
                ? 'opacity-100 scale-100 z-10' // Current slide zooming in
                : 'opacity-100 scale-100 z-10' // Current slide fully visible
              : index === prevSlide && isTransitioning
                ? 'opacity-0 scale-110 z-0' // Previous slide zooming out
                : 'opacity-0 scale-100 z-0' // Hidden slides
          }`}
        >
          <HeroBannerSlideCard {...banner} />
        </div>
      ))}
    </div>
  );
}