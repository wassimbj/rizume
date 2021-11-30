import React from "react";
import ExperianceCard from "./ExperianceCard";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection() {
  return (
    <section>
      <SectionTitle title="Experience" />
      <ExperianceCard
        company="Github"
        desc="Voluptas tempora et enim veritatis. Expedita voluptas voluptatem et.
    Laudantium delectus illo possimus tenetur. In incidunt qui omnis. Vel
    placeat aut est quis"
        from="Jul 2020"
        job="Software Developer"
        to="Present"
      />
      <ExperianceCard
        company="Google"
        desc="Voluptas tempora et enim veritatis. Expedita voluptas voluptatem et.
    Laudantium delectus illo possimus tenetur. In incidunt qui omnis. Vel
    placeat aut est quis"
        from="Jul 2015"
        to="Jan 2019"
        job="Software Developer"
      />
    </section>
  );
}
