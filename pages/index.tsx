import Head from "next/head";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rizume</title>
      </Head>

      {/* Header */}
      <header className="py-10 px-20 border-b border-gray-800">
        <div className="flex justify-between flex-wrap">
          <div>
            <span className="text-4xl font-bold text-gray-300 block">
              Wassim Ben Jdida
            </span>
            <span className="text-2xl text-gray-400 block">
              Software Developer
            </span>
          </div>

          <div className="font-semibold">
            <div
              // TODO: show a "Copied" message
              onClick={() =>
                navigator.clipboard.writeText("wassimbenjdida@gmail.com")
              }
              className="flex mb-1 cursor-pointer hover:text-gray-300 transition"
            >
              <img
                src="/images/at-sign.svg"
                width="18px"
                className="mr-1 block"
              />
              wassimbenjdida@gmail.com
            </div>
            <a href="#" className="flex mb-1 hover:text-gray-300 transition">
              <img
                src="/images/github.svg"
                width="18px"
                className="mr-1 block"
              />
              wassimbj
            </a>
            <a href="#" className="flex hover:text-gray-300 transition">
              <img
                src="/images/linkedin.svg"
                width="18px"
                className="mr-1 block"
              />
              wasssim-ben-jdida
            </a>
          </div>
        </div>
      </header>

      <main className="px-20 mt-20">
        <div className="grid grid-cols-2">
          <div className="col-span-1 pr-10">
            {/* Bio */}
            <AboutSection />
            <br />
            <br />
            {/* Experience */}
            <ExperienceSection />
            <br />
            <br />
            {/* Porjects */}
            <ProjectsSection />
          </div>
          {/* ------------------------------------ */}
          <div className="col-span-1">
            {/* Skills */}
            <SkillsSection />
          </div>
        </div>
      </main>
    </Layout>
  );
}
