"use client";

import { FeatureCard } from "./cards/FeatureCard";
import image1 from '../../../assets/images/why1.jpg'
import image2 from '../../../assets/images/why2.jpg'
import image3 from '../../../assets/images/why3.jpg'
import image4 from '../../../assets/images/why4.jpg'
import image5 from '../../../assets/images/why3.jpg'
import image6 from '../../../assets/images/why1.jpg'
import image7 from '../../../assets/images/why2.jpg'
import image8 from '../../../assets/images/why4.jpg'
import { WhyFeatureInterface } from "../passenger.interface";

const Why = () => {
  const features: WhyFeatureInterface[] = [
    { id: 1, title: "Top Rated Drivers", imagePath: image1.src },
    { id: 2, title: "Safe Journey", imagePath: image2.src },
    { id: 3, title: "Without Peak Pricing", imagePath: image3.src },
    { id: 4, title: "Fast And Secure", imagePath: image4.src },
    { id: 5, title: "Lowest Rates", imagePath: image5.src },
    { id: 6, title: "Best Quality Cabs", imagePath: image6.src },
    { id: 7, title: "Online Booking", imagePath: image7.src },
    { id: 8, title: "24/7 Cab Service", imagePath: image8.src },
  ];

  return (
    <section className="mb-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h3 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 capitalize tracking-wide">
            Why Taxi Cab
          </h3>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          { features.map(({ id, title, imagePath}) => (
            <FeatureCard key={id} id={id} title={title} imagePath={imagePath}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
