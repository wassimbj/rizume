import React from "react";
import ExperianceCard from "./ExperianceCard";
import SectionTitle from "./SectionTitle";
import experienceData from "../meta/experience.json";

export default function ExperienceSection() {
  return (
    <section>
      <SectionTitle title="Experience" />
      {experienceData.map((data, idx) => (
        <ExperianceCard
          key={idx}
          company={data.company}
          desc={data.desc}
          from={data.interval[0]}
          job={data.job}
          to={data.interval[1]}
        />
      ))}
    </section>
  );
}
