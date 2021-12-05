import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative font-semibold mb-2 inline-block">
      <span className="text-xl block px-2 bg-lightBlue text-lightBlue text-opacity-80 bg-opacity-25 relative z-10">{title}</span>
      <span className="absolute rounded-full left-0 w-full block h-0.5 bg-gradient-to-r -mt-0.5 from-lightBlue to-gray-900"></span>
    </div>
  );
}
