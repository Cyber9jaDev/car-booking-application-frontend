import image1 from '../../../assets/images/team1.jpg'
import image2 from '../../../assets/images/team2.jpg'
import image3 from '../../../assets/images/team3.jpg'
import image4 from '../../../assets/images/team4.jpg'
import { TeamMember } from '../passenger.interface';
import { TeamMemberCard } from './cards/TeamMemberCard';

// Team members data (you can move this to a separate data file)
const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'Taxi Driver',
    phone: '08062128170',
    image: image1.src
  },
  {
    name: 'Laura Hill',
    role: 'Taxi Driver',
    phone: '08062128170',
    image: image2.src
  },
  {
    name: 'Smith Kevin',
    role: 'Taxi Driver',
    phone: '08062128170',
    image: image3.src
  },
  {
    name: 'Thomson Doe',
    role: 'Taxi Driver',
    phone: '08062128170',
    image: image4.src
  },
];

export default function Team() {
  return (
    <section id="team" className="py-12 px-4 max-w-7xl mx-auto">
      <div>
        <header className="mb-8">
          <h4 className="text-4xl md:text-[50px] font-extrabold text-center text-gray-800 tracking-wider uppercase"> Our Drivers </h4>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => <TeamMemberCard key={member.name} member={member} /> )}
        </div>
      </div>
    </section>
  );
}