import React from 'react';

const TestimonialCard = ({ name, text, img, date }: { name: string, text: string, img: string, date: string}) => {
  return (
    <div className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
      <div className="flex items-center mb-4 p-4 border-b">
        <img src={img} alt={name} className='w-[50px] h-[50px] rounded-full object-cover' />
        <div className="flex flex-col ml-4">
          <span className="text-xl font-medium tracking-tighter text-gray-900 font-inter">{name}</span>
          <span className="text-xs font-normal font-inter text-gray-500 mt-1">{date}</span>
        </div>
      </div>
      <div className="p-4 font-sans text-sm text-gray-700 leading-relaxed">{text}</div>
    </div>
  )
}

export default TestimonialCard;