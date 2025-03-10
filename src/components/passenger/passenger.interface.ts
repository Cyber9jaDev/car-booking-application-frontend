import { ReactElement } from "react";
import image1 from '../../assets/images/team1.jpg'
import image2 from '../../assets/images/team2.jpg'
import image3 from '../../assets/images/team3.jpg'
import image4 from '../../assets/images/team4.jpg'
import CarouselCard from './home/carousel/CarouselCard';

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

export type CarouselCardProps = { 
  id?: number;
  image: string;
  name: string;
  role: string;
  text: string;
}
