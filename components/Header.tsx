import React from "react";
import AtSignIcon from "./icons/AtSignIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Header() {
  return (
    <header className="py-5 lg:px-20 md:px-10 px-5 border-b border-white border-opacity-20">
      <div className="flex items-center justify-between flex-wrap">
        <div className="md:mb-0 mb-10">
          <span className="text-4xl font-bold text-gray-300 block">
            Wassim Ben Jdida
          </span>
          <span className="text-2xl text-white text-opacity-60 block">
            Software Developer
          </span>
        </div>

        <div className="font-semibold">
          <div
            // TODO: show a "Copied" message
            onClick={() =>
              navigator.clipboard.writeText("wassimbenjdida@gmail.com")
            }
            className="py-1 flex items-center cursor-pointer hover:text-gray-300 transition"
          >
            <AtSignIcon color="#ccc" width="20" className="mr-1" />
            wassimbenjdida@gmail.com
          </div>
          <a href="#" className="py-1 flex items-center hover:text-gray-300 transition">
            <GithubIcon color="#ccc" width="20" className="mr-1" />
            wassimbj
          </a>
          <a href="#" className="py-1 flex items-center hover:text-gray-300 transition">
            <LinkedinIcon color="#ccc" width="20" className="mr-1" />
            wasssimbenjdida
          </a>
        </div>
      </div>
    </header>
  );
}
