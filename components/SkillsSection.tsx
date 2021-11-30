import React from "react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section>
      <SectionTitle title="Skills" />

      <div className="flex items-center flex-wrap">
        <SkillCard skill="Javascript" />
        <SkillCard skill="Typescript" />
        <SkillCard skill="Golang" />
        <SkillCard skill="Node.js" />
        <SkillCard skill="Software Development" />
        <SkillCard skill="MySQL" />
        <SkillCard skill="Postgres" />
        <SkillCard skill="MongoDB" />
        <SkillCard skill="Redis" />
        <SkillCard skill="Git" />
        <SkillCard skill="Docker" />
        <SkillCard skill="HTML" />
        <SkillCard skill="CSS" />
      </div>
    </section>
  );
}
