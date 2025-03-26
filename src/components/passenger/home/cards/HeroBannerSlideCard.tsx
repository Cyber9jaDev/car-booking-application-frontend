import { HeroBannerSlide } from "@/interface/passenger.interface";
import Image from "next/image";
import Link from "next/link";

export default function HeroBannerSlideCard({ image, title, subtitle }: HeroBannerSlide) {
  return (
    <div className="h-screen w-screen flex-shrink-0 relative">
      <Image src={image} alt={title} fill className="h-full w-full object-cover"/>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-black/30 mr-4">
        <h2 className="text-4xl md:text-6xl font-black text-center mx-auto mb-8 w-full">{title}</h2>
        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center max-w-2xl">{subtitle}</p>
        <button className="mt-12" >
          <Link className="flex text-base border-2 text-white py-5 px-8 rounded-sm font-extrabold uppercase transition-all duration-1000 ease-in-out hover:scale-105" href="/booking"> Book Now </Link>
        </button>
      </div>
    </div>
  );
}

