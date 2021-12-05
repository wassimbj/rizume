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
      <span className="text-white font-semibold opacity-90">{company}</span>
      <span className="text-lightBlue text-opacity-25 mx-2">↬</span>
      <span className="text-white text-opacity-70 font-normal">{job}</span>
      <span className="text-lightBlue text-opacity-25 mx-2">↬</span>
      <span className="text-white text-opacity-40 font-normal">
        {from} - {to}
      </span>
      <p>{desc}</p>
    </div>
  );
}
