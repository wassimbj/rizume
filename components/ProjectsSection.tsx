import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import projectsData from "../meta/projects.json";

export default function ProjectsSection() {
  return (
    <section>
      <SectionTitle title="Projects" />
      {projectsData.map((project) => (
        <ProjectCard
          title={project.name}
          subtitle={project.title}
          description={project.desc}
          github={project.links.github}
          demo={project.links.demo}
        />
      ))}
    </section>
  );
}
