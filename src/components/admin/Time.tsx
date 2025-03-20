"use client";

import { memo, useEffect, useState } from "react";
import { Clock } from "lucide-react";

const Time = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format hours to 12-hour format with AM/PM
  const formatHour = () => {
    const h = time.hour % 12;
    return h ? h : 12; // Convert 0 to 12 for 12 AM
  };

  // Add leading zeros for single digits
  const formatTimeUnit = (unit: number) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  // Determine AM or PM
  const period = time.hour >= 12 ? "PM" : "AM";

  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-200 ms-auto">
      <Clock className="text-blue-600 mr-2 h-5 w-5" />
      <div className="flex items-center">
        <span className="font-mono text-xl font-bold text-blue-700">
          {formatTimeUnit(formatHour())}
        </span>
        <span className="text-blue-700 font-bold mx-1 animate-pulse">:</span>
        <span className="font-mono text-xl font-bold text-blue-700">
          {formatTimeUnit(time.minute)}
        </span>
        <span className="text-blue-700 font-bold mx-1 animate-pulse">:</span>
        <span className="font-mono text-xl font-bold text-blue-700">
          {formatTimeUnit(time.second)}
        </span>
        <span className="ml-2 text-xs font-semibold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
          {period}
        </span>
      </div>
    </div>
  );
};

const MemoizedTime = memo(Time);
export default MemoizedTime;
