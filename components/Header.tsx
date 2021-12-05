import React, { useState } from "react";
import AtSignIcon from "./icons/AtSignIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import aboutData from "../meta/about.json";

export default function Header() {
  const [emailCopied, setEmailCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(`${aboutData.contact.email}`);
    setEmailCopied(true);

    setTimeout(() => {
      setEmailCopied(false);
    }, 500);
  };

  return (
    <header>
      <div className="flex items-center justify-between flex-wrap">
        <div className="md:mb-0 mb-10">
          <span className="text-4xl font-bold text-white text-opacity-90 block">
            {aboutData.fullname}
          </span>
          <span className="text-2xl text-lightBlue text-opacity-60 block">
            {aboutData.title}
          </span>
        </div>

        <div>
          <div
            onClick={copyEmail}
            className="relative py-1 cursor-pointer font-semibold flex items-center text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <AtSignIcon width="18" color="#000" />
            </span>
            {aboutData.contact.email}

            {emailCopied && (
              <span className="absolute inline-block p-1 font-normal text-xs animate-ping rounded-md bg-darkBlue text-lightBlue shadow-2xl -top-5 left-1/2">
                Copied
              </span>
            )}
          </div>
          <a
            href={`https://github.com/${aboutData.contact.github}`}
            className="py-1 font-semibold flex items-center text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <GithubIcon width="18" color="#000" />
            </span>
            {aboutData.contact.github}
          </a>
          <a
            href={`https://linkedin.com/in/${aboutData.contact.linkedin}`}
            className="py-1 font-semibold flex items-center text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <LinkedinIcon width="18" color="#000" />
            </span>
            {aboutData.contact.linkedin}
          </a>
        </div>
      </div>
    </header>
  );
}
