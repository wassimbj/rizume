import React from "react";

interface EduProps {
  school: string;
  industry: string;
  interval: Array<number>;
}
export default function EducationCard({
  school,
  industry,
  interval,
}: EduProps) {
  return (
    <div className="mb-5">
      <span className="block font-semibold text-white text-opacity-90">{school}</span>
      <span className="text-white text-opacity-50">{industry}</span>
      <span className="text-lightBlue text-opacity-25 mx-2">↬</span>
      <span className="text-white text-opacity-30">
        {interval[0]} - {interval[1]}
      </span>
    </div>
  );
}
