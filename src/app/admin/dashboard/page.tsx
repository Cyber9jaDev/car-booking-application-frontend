"use client";
import DashboardCard from "@/components/admin/cards/DashboardCard";
import { stats } from "@/components/admin/data/data";
// import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function DashboardPage() {
  return (
    <div className="relative w-full">
      <div className="mt-4">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <DashboardCard key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
