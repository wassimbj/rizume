import React from "react";
import AtSignIcon from "./icons/AtSignIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Header() {
  return (
    <header className="py-5 lg:px-20 md:px-10 px-3 border-b border-lightBlue border-opacity-10">
      <div className="flex items-center justify-between flex-wrap">
        <div className="md:mb-0 mb-10">
          <span className="text-4xl font-bold text-white text-opacity-90 block">
            Wassim Ben Jdida
          </span>
          <span className="text-2xl text-lightBlue text-opacity-60 block">
            Software Developer
          </span>
        </div>

        <div className="font-semibold">
          <div
            // TODO: show a "Copied" message
            onClick={() =>
              navigator.clipboard.writeText("wassimbenjdida@gmail.com")
            }
            className="py-1 flex items-center cursor-pointer text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <AtSignIcon width="18" color="#000" />
            </span>
            wassimbenjdida@gmail.com
          </div>
          <a
            href="#"
            className="py-1 flex items-center text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <GithubIcon width="18" color="#000" />
            </span>
            wassimbj
          </a>
          <a
            href="#"
            className="py-1 flex items-center text-lightBlue text-opacity-40 hover:text-opacity-100 transition"
          >
            <span className="bg-lightBlue rounded-full mr-1 p-1">
              <LinkedinIcon width="18" color="#000" />
            </span>
            wasssimbenjdida
          </a>
        </div>
      </div>
    </header>
  );
}
