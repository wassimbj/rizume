import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative font-semibold mb-3 inline-block">
      <span className="text-2xl block px-2 bg-lightBlue text-lightBlue text-opacity-80 bg-opacity-25 relative z-10">{title}</span>
      <span className="absolute left-0 w-full block h-0.5 bg-gradient-to-r -mt-0.5 from-darkBlue to-lightBlue"></span>
    </div>
  );
}
