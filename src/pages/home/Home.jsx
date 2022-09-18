import React from "react";
import HeroSection from "../../components/heroSection/Hero";
import AboutSection from "../../components/aboutSection/About";
import ProjectSection from "../../components/projectSection/ProjectSection";
import ContactBanner from "../../components/contactBanner/ContactBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactBanner />
    </main>
  );
}
