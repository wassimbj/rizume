import React from "react";
import EducationCard from "./EducationCard";
import SectionTitle from "./SectionTitle";
import educationData from "../meta/education.json";

export default function EducationSection() {
  return (
    <section>
      <SectionTitle title="Education" />

      {educationData.map((data) => (
        <EducationCard
          school={data.school_name}
          industry={data.industry}
          interval={data.interval}
        />
      ))}
    </section>
  );
}
