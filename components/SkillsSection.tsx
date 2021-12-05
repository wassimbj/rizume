import React from "react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import skillsData from "../meta/skills.json"

export default function SkillsSection() {
  return (
    <section>
      <SectionTitle title="Skills" />

      <div className="flex items-center flex-wrap">
        {skillsData.map(skill => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </section>
  );
}
