import image1 from "../../../../assets/images/team1.jpg";
import image2 from "../../../../assets/images/team2.jpg";
import image3 from "../../../../assets/images/team3.jpg";
import image4 from "../../../../assets/images/team4.jpg";
import bannerImage1 from "../../../../assets/images/banner2.jpg";
import bannerImage2 from "../../../../assets/images/banner4.jpg";
import bannerImage3 from "../../../../assets/images/banner3.jpg";
import bannerImage4 from "../../../../assets/images/banner2.jpg";
import { CarouselCardProps, DriverProps, HeroBannerSlide } from "@/interface/passenger.interface";

export const testimonialData: CarouselCardProps[] = [
  {
    id: 1,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image1.src,
  },
  {
    id: 2,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image2.src,
  },
  {
    id: 3,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image3.src,
  },
  {
    id: 4,
    name: "Timothy Leah",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image4.src,
  },
  {
    id: 5,
    name: "Roberto Sanchez",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image3.src,
  },
  {
    id: 6,
    name: "Lexus Toyota",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,",
    image: image3.src,
  },
];

export const drivers: DriverProps[] = [
  {
    name: "John Smith",
    role: "Taxi Driver",
    phone: "08062128170",
    image: image1.src,
  },
  {
    name: "Laura Hill",
    role: "Taxi Driver",
    phone: "08062128170",
    image: image2.src,
  },
  {
    name: "Smith Kevin",
    role: "Taxi Driver",
    phone: "08062128170",
    image: image3.src,
  },
  {
    name: "Thomson Doe",
    role: "Taxi Driver",
    phone: "08062128170",
    image: image4.src,
  },
];

export const heroBannerSlides: HeroBannerSlide[] = [
  {
    title: "24/7 Bus Service",
    subtitle: 'One Call Away',
    image: bannerImage1.src
  },
  {
    title: "Online Bus Booking",
    subtitle: 'No Extra Charges',
    image: bannerImage2.src
  },
  {
    title: "Reach Your Destination",
    subtitle: 'Within Exact Time',
    image: bannerImage3.src
  },
  {
    title: "Travel Safe & Secure",
    subtitle: 'Assured Bus Service',
    image: bannerImage4.src
  }
]