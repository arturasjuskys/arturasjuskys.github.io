import React from "react";
import HeroSection from "../../components/heroSection/Hero";
import AboutSection from "../../components/aboutSection/About";
import ProjectSection from "../../components/projectSection/ProjectSection";
import ContactSection from "../../components/contactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
