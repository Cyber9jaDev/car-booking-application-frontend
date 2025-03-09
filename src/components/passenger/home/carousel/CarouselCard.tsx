import React from 'react';

const CarouselCard = ({ name, text, img, date }: { name: string, text: string, img: string, date: string}) => {
  return (
    <div className='testimonial'>
      <div className="profile-info">
        <img src={img} alt="" />
        <div className="profile">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  )
}

export default CarouselCard;