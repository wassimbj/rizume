import React from "react";
import GithubIcon from "./icons/GithubIcon";
import GlobeIcon from "./icons/GlobeIcon";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  github,
  demo,
}: ProjectProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center flex-wrap font-semibold">
        <span className="text-white text-opacity-90">{title}</span>
        <span className="text-lightBlue text-opacity-25 mx-2">↬</span>
        <span className="text-white text-opacity-70 font-normal">
          {subtitle}
        </span>
        {(!!github || !!demo) && (
          <span className="text-lightBlue text-opacity-25 mx-2">↬</span>
        )}
        {/* github and demo links */}
        <div className="flex flex-wrap items-center">
          {!!github && (
            <a
              href={github}
              className="mr-2 p-1 inline-block bg-lightBlue bg-opacity-20 hover:bg-opacity-30 transition rounded-full"
            >
              <GithubIcon color="#bdddff" width="18" />
            </a>
          )}
          {!!demo && (
            <a
              href={demo}
              className="p-1 inline-block bg-lightBlue bg-opacity-20 hover:bg-opacity-30 transition rounded-full"
            >
              <GlobeIcon color="#bdddff" width="18" />
            </a>
          )}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
