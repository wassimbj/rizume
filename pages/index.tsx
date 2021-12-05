import Head from "next/head";
import Layout from "../components/layout";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rizume</title>
      </Head>

      <div className="absolute top-0 left-0 w-full h-full" id="main-bg"></div>

      <div className="z-10 relative">
        {/* Header */}
        <div className="py-10 lg:px-40 md:px-10 px-3 border-b border-lightBlue border-opacity-10">
          <Header />
        </div>

        <main className="lg:px-40 md:px-10 px-3 z-10 relative">
          <div className="md:flex md:justify-between">
            <div className="mt-14 w-full">
              {/* Bio */}
              <AboutSection />
              <br />
              <br />
              <br />
              {/* Experience */}
              <ExperienceSection />
              <br />
              <br />
              <br />
              {/* Porjects */}
              <ProjectsSection />
              <br />
              <br />
              <br />
            </div>
            {/* ------------------------------------ */}
            <div className="md:block hidden min-h-screen w-px mx-5 center bg-lightBlue bg-opacity-10 relative"></div>
            {/* ------------------------------------ */}
            <div className="md:mt-14 w-full">
              {/* Skills */}
              <SkillsSection />
              <br />
              <br />
              <br />
              {/* Education */}
              <EducationSection />
              <br />
              <br />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
