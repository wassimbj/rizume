import React from "react";
import SectionTitle from "./SectionTitle";
import aboutData from "../meta/about.json";

export default function AboutSection() {
  return (
    <section>
      <SectionTitle title="About" />

      <p className="break-words">{aboutData.bio}</p>
    </section>
  );
}
