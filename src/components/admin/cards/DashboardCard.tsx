import { Stat } from "@/interface/admin.interface";
import { ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DashboardCard({ title, image, value, trend = "up", percentage = "12.5%" }: Stat) {
  const getTrendIcon = () => {
    if (trend === "up") {
      return <ChevronUp className="h-4 w-4 text-emerald-500" />;
    } else if (trend === "down") {
      return <ChevronDown className="h-4 w-4 text-red-500" />;
    } else {
      return <TrendingUp className="h-4 w-4 text-blue-500" />;
    }
  };

  const getTrendColor = () => {
    if (trend === "up") return "text-emerald-500";
    if (trend === "down") return "text-red-500";
    return "text-blue-500";
  };

  const getProgressColor = () => {
    if (trend === "up") return "bg-emerald-500";
    if (trend === "down") return "bg-red-500";
    return "bg-blue-500";
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col h-44 border border-gray-100"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
          <Image 
            src={image} 
            alt={title} 
            width={32} 
            height={32} 
            className="object-contain" 
          />
        </div>
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTrendColor()} bg-opacity-10 ${trend === "up" ? "bg-emerald-100" : trend === "down" ? "bg-red-100" : "bg-blue-100"}`}>
          {getTrendIcon()}
          <span className="ml-1">{percentage}</span>
        </span>
      </div>
      
      <div className="mt-1">
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-gray-900 text-2xl font-bold mt-1">{value}</h3>
      </div>
      
      <div className="mt-auto">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full ${getProgressColor()} rounded-full`} style={{ width: '75%' }}></div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 text-xs font-medium">Today</p>
          <p className="text-gray-400 text-xs">75% of target</p>
        </div>
      </div>
    </div>
  );
}