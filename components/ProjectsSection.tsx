import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection() {
  return (
    <section>
      <SectionTitle title="Projects" />

      <ProjectCard
        title="Something"
        subtitle="Something cool for doing stuff"
        description="Enim repudiandae quod eligendi quo et cupiditate. Dolor porro error alias. Dolores libero aliquam fugiat explicabo."
      />
      <ProjectCard
        title="Something 2"
        subtitle="Another thing 2"
        description="Enim repudisandae quod eligendi quo et cupiditate. Dolor porro error alias. Dolores libero aliquam fugiat explicabo."
      />
      <ProjectCard
        title="Something 3"
        subtitle="Another thing 3"
        description="Enim repudisandae quod eligendi quo et cupiditate. Dolor porro error alias. Dolores libero aliquam fugiat explicabo."
      />
    </section>
  );
}
