import Image from "next/image";
import { Phone } from 'lucide-react';
import { DriverProps } from "@/interface/passenger.interface";

export const DriverCard = ({ member }: { member: DriverProps }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4 w-[250px] max-h-[250px] aspect-square relative overflow-hidden rounded-xs">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <div className="text-center">
      <h4 className="text-sm md:text-lg font-bold uppercase tracking-wider text-black"> {member.name} </h4>
      <p className="text-xs md:text-base text-gray-600 font-semibold tracking-wider my-1"> {member.role} </p>
      <a  href={`tel:${member.phone}`} className="text-gray-400 text-xs md:text-sm font-medium tracking-wider hover:text-gray-600 transition-colors">
        <Phone className="inline-block mr-2 w-4 h-4" />
        {member.phone}
      </a>
    </div>
  </div>
);
