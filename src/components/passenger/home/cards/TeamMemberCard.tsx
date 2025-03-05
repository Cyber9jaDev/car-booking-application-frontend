import Image from "next/image";
import { Phone } from 'lucide-react';
import { TeamMember } from "../../passenger.interface";

export const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center p-4">
    <div className="mb-4 w-full aspect-square relative overflow-hidden rounded-lg">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="text-center">
      <h4 className="text-lg font-bold uppercase tracking-wider text-black"> {member.name} </h4>
      <p className="text-base text-gray-600 font-semibold tracking-wider my-2"> {member.role} </p>
      <a 
        href={`tel:${member.phone}`} 
        className="text-gray-400 text-sm font-medium tracking-wider hover:text-gray-600 transition-colors"
      >
        <Phone className="inline-block mr-2 w-4 h-4" />
        {member.phone}
      </a>
    </div>
  </div>
);
