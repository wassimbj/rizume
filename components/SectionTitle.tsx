import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative font-semibold text-xl text-white text-opacity-60 mb-2 inline-block">
      <span className="block relative z-10">{title}</span>
      <span className="absolute rounded-full left-0 w-full block h-0.5 bg-gradient-to-r -mt-1 from-gray-600 to-gray-900"></span>
    </div>
  );
}
