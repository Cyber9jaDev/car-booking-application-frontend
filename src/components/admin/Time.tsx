"use client";

import { memo, useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  useEffect(() => {
    const time_ = setInterval(() => {
      setTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearInterval(time_);
  }, []);

  const { hour, minute, second } = time;
  
  return (
    <div className="font-semibold text-xl text-[#1363c6] py-2 px-3 me-sm-2 me-lg-3 ms-auto border border-black">
      <span className="font-semibold text-xl text-[#1363c6]">{hour}</span>{" "}
      <span>:</span> <span> {minute} </span> <span className="">:</span>{" "}
      <span> {second} </span>
    </div>
  );
};

const MemoizedTime = memo<typeof Time>(Time);
export default MemoizedTime;
