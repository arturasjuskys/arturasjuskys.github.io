import React from "react";
import HeroSection from "../../components/heroSection/Hero";
import AboutSection from "../../components/aboutSection/About";
import ProjectSection from "../../components/projectSection/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
