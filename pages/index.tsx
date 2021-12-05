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

      {/* Header */}
      <Header />

      <main className="lg:px-20 md:px-10 px-3">
        <div className="md:flex md:justify-between">
          <div className="mt-14 w-full">
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
            {/* Education */}
            <EducationSection />
          </div>
        </div>
      </main>

      <div className="w-full h-px bg-gradient-to-r from-indigo-300 to-blue-600"></div>
    </Layout>
  );
}
