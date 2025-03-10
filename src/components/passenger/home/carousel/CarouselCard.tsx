import React from "react";
import { CarouselCardProps } from "../../passenger.interface";

const CarouselCard = ({ name, text, image, role }: CarouselCardProps) => {
  return (
    <div className="mx-4">
      <header className="border border-[#bebebe] relative after:content-[''] after:absolute after:top-full after:left-[10%] after:border-t-[15px] after:border-t-[rgb(43,43,43)] after:border-r-[4px] after:border-r-transparent after:border-l-[12px] after:border-l-transparent">
        <p className="text-[#333] text-[0.925em] m-0 leading-[2em] tracking-[1px] font-semibold p-8">{text}</p>
      </header>
      <div className="mt-8 flex">
        <div>
          <img className="border rounded-full w-30 h-30 object-cover" src={image} alt="feedback-img" />
        </div>
        <div className="float-left w-[65%] mt-6 ml-3">
          <h5 className="text-[#333] text-[1.2em] tracking-[1px] font-extrabold">{name}</h5>
          <p className="text-gray-600 text-sm mt-2">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;