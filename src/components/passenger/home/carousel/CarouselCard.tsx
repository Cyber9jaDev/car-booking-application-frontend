import React from 'react';

const CarouselCard = ({ name, text, image, role }: { name: string, text: string, image: string, role: string}) => {
  return (
    <div className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
      <div className="flex items-center mb-4 p-4 border-b">
        <img src={image} alt={name} className='w-[50px] h-[50px] rounded-full object-cover' />
        <div className="flex flex-col ml-4">
          <span className="text-xl font-medium tracking-tighter text-gray-900 font-inter">{name}</span>
          <span className="text-xs font-normal font-inter text-gray-500 mt-1">{role}</span>
        </div>
      </div>
      <div className="p-4 font-sans text-sm text-gray-700 leading-relaxed">{text}</div>
    </div>
  )
}

export default CarouselCard;