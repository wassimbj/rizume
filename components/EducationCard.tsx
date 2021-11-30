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
      <span className="block font-semibold text-gray-300">{school}</span>
      <span className="text-gray-500">{industry}</span>
      <span className="text-gray-700 mx-2">‣</span>
      <span className="text-gray-500">
        {interval[0]} - {interval[1]}
      </span>
    </div>
  );
}
