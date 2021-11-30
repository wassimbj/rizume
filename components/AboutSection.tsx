import React from "react";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section>
      <SectionTitle title="About" />

      <p className="break-words">
        Hello there ! as you know my name is wassim, a software developer from Tunisia (a small country in africa),
        i love writing dry code and scalable apps using the latest and greatest techs out here.
      </p>
    </section>
  );
}
