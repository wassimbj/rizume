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
      <div className="flex items-center font-semibold text-gray-300">
        {title}
        <span className="text-gray-700 mx-2">‣</span>
        <span className="text-white text-opacity-60 font-normal">{subtitle}</span>
        {/* <span className="text-gray-700 mx-2">‣</span> */}
        {/* github and demo links */}
        <div className="flex flex-wrap items-center">
          {!!github && (
            <a
              href={github}
              className="mr-2 p-1 inline-block bg-gray-800 hover:bg-gray-700 transition rounded-full"
            >
              <GithubIcon color="#ccc" width="18" />
            </a>
          )}
          {!!demo && (
            <a
              href={demo}
              className="p-1 inline-block bg-gray-800 hover:bg-gray-700 transition rounded-full"
            >
              <GlobeIcon color="#ccc" width="18" />
            </a>
          )}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
