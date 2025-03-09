"use client";

import { useEffect, useState } from "react";
import style from "../../styles/testimonial.module.scss";
import image1 from "../../../assets/images/team1.jpg";
import image2 from "../../../assets/images/team2.jpg";
import image3 from "../../../assets/images/team3.jpg";
import image4 from "../../../assets/images/team4.jpg";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import TestimonialCard from "./cards/TestimonialCard";
import { testimonialData } from "../passenger.interface";

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
        currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
      );
    } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonials.length - 2 ? 0 : currentSlide + 2
      );
    } else {
      setCurrentSlide((currentSlide) =>
        currentSlide === testimonials.length - 3 ? 0 : currentSlide + 3
      );
    }
  };

  const testimonials = [
    {
      img: image1,
      name: "John Doe",
      date: "4 days ago",
      text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    },
    {
      img: image2,
      name: "Paul Walker",
      date: "2 days ago",
      text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    },
    {
      img: image3,
      name: "James Bond",
      date: "3 days ago",
      text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    },
    // {
    //   img: image4,
    //   name: "Jason Scott",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image3,
    //   name: "Antoine Malone",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image3,
    //   name: "Johnny Depp",
    //   date: "5 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image3,
    //   name: "Kyle Walker",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image1,
    //   name: "Virgil Van Dijk",
    //   date: "2 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image2,
    //   name: "Jordan Henderson",
    //   date: "3 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image4,
    //   name: "Joe Gomez",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image2,
    //   name: "Steven Gerrard",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image1,
    //   name: "Lionel Messi",
    //   date: "5 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image2,
    //   name: "Christian Simon",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image3,
    //   name: "Peter Crouch",
    //   date: "2 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image4,
    //   name: "Alberto Danielle",
    //   date: "3 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image1,
    //   name: "Roberto David",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image2,
    //   name: "Sebastian Peter",
    //   date: "4 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
    // {
    //   img: image1,
    //   name: "John Paul",
    //   date: "5 days ago",
    //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
    // },
  ];

  return (
    <section className={style.testimonials}>
      <h4 className="text-[#121212] text-[32px] font-semibold tracking-[-0.03em] text-center mb-10 mt-0 pt-[60px] font-inter">
        What people are saying about us
      </h4>
      <div className="bg-green-400 flex overflow-hidden w-[90%] relative mx-auto shadow-[0px_4px_16px_16px_rgba(0,0,0,0.02)]">
        {testimonialData.map((testimonial, index) => {
          return ( 
            <div 
              key={index} 
              className="w-full md:[50%] lg:w-[33%] min-h-[244px] shadow-lg p-2.5 font-['Inter'] bg-white"
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
