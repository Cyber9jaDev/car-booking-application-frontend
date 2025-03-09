import { ReactElement } from "react";
import image1 from '../../assets/images/team1.jpg'
import image2 from '../../assets/images/team2.jpg'
import image3 from '../../assets/images/team3.jpg'
import image4 from '../../assets/images/team4.jpg'

export interface WhyFeatureInterface {
  id: number;
  title: string;
  imagePath: string;
}

export type TeamMember = {
  name: string;
  role: string;
  phone: string;
  image: string;
};


export type TestimonialCarouselType = ReactElement[];

export type ResponsiveObjType = { items: number }

export type ResponsiveType = { [index: number]: ResponsiveObjType }

export type CarouselDataType = {
  autoPlay?: boolean
  autoPlayStrategy?: 'default' | 'none' | 'action' | 'all'
  autoPlayInterval?: number
  animationDuration?: number
  animationType?: 'fadeout' | 'slide'
  infinite?: boolean
  touchTracking?: boolean
  disableButtonsControls?: boolean
  keyboardNavigation?: boolean
}




export const testimonialData = [
  {
    id: 1,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image1.src
  },
  {
    id: 2,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image2.src
  },
  {
    id: 3,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image3.src
  },
  {
    id: 4,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image4.src
  }
];