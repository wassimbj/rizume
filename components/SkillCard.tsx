import React from "react";

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <span className="bg-lightBlue bg-opacity-5 text-lightBlue text-opacity-50 px-3 py-1 rounded-md mr-1 mb-1 inline-block">
      {skill}
    </span>
  );
}
