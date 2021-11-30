import React from "react";
import EducationCard from "./EducationCard";
import SectionTitle from "./SectionTitle";

export default function EducationSection() {
  return (
    <section>
      <SectionTitle title="Education" />

      <EducationCard
        school="Some university"
        industry="Computer Science"
        interval={[2020, 2023]}
      />
      <EducationCard
        school="Some other school"
        industry="Bachelor in Computer Science"
        interval={[2015, 2019]}
      />
    </section>
  );
}
