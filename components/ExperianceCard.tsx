import React from "react";

interface ExperienceProps {
  company: string;
  job: string;
  from: string;
  to: string;
  desc: string;
}
export default function ExperianceCard({
  company,
  job,
  from,
  to,
  desc,
}: ExperienceProps) {
  return (
    <div className="mb-5 relative">
      {/* <span className="absolute -left-2 bg-white bg-opacity-10 top-3 w-0.5" style={{height: "calc(100% + 20px)"}}></span> */}
      <span className="block font-semibold text-gray-300">
        <div className="relative">
          {company}
          <span className="absolute z-10 -left-3 bg-white bg-opacity-25 top-2 rounded-full w-2 h-2"></span>
        </div>
        <span className="text-gray-700 mx-2">‣</span>
        <span className="text-white text-opacity-60 font-normal">{job}</span>
        <span className="text-gray-700 mx-2">‣</span>
        <span className="text-white text-opacity-30 font-normal">
          {from} - {to}
        </span>
      </span>
      <p>{desc}</p>
    </div>
  );
}
