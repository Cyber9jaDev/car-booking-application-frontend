import React from 'react';

const TestimonialCard = ({ name, text, img, date }: { name: string, text: string, img: string, date: string}) => {
  return (
    <div className='w-full bg-yellow-200'>
      <div className="flex items-center mb-2.5 bg-red-500">
        <img src={img} alt={name} className='w-[50px] h-[50px]' />
        <div className="flex flex-col w-full h-13 ml-4">
          <span className="text-xl font-medium tracking-tighter text-gray-900 font-inter">{name}</span>
          <span className="text-xs font-normal font-inter text-gray-500 mt-1 flex leading-[18px]">{date}</span>
        </div>
      </div>
      <div className="w-full h-full font-sans text-justify text-sm text-gray-700 leading-normal px-5 font-normal">{text}</div>
    </div>
  )
}

export default TestimonialCard;