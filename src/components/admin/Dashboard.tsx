import { stats } from "./data/data";
import DashboardCard from "./cards/DashboardCard";

export default function Dashboard() {
  return (
    <div className="mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <DashboardCard {...stat } />
          ))}
        </div>
      </div>
    </div>
  );
}
