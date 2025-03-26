import { WhyFeatureInterface } from "@/interface/passenger.interface";
import Image from "next/image";

export const FeatureCard = ({ id, title, imagePath }: WhyFeatureInterface) => {
  return (
    <div className="relative overflow-hidden group mb-6 lg:mb-0">
      <div className="py-10 px-4 text-center h-64 flex flex-col items-center justify-center transition-opacity duration-500 hover:opacity-90 relative">
        {/* Background image with Next.js Image component */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={id <= 4} // Prioritize loading first 4 images
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          <div className="mx-auto w-20 h-20 border border-white flex items-center justify-center rotate-45 bg-black/20">
            <span className="-rotate-45 text-white font-extrabold text-3xl">
              {id}
            </span>
          </div>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white tracking-wide">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
