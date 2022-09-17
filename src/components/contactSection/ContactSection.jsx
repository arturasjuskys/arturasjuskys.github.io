import React from "react";
import "./contactSection.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import Button from "../button/Button";

export default function ContactSection() {
  return (
    <article className="contact-section">
      <SectionTitle
        heading="Let me help you"
        subheading="Have a project in mind"
      />
      <Button btnText="Contact Now" btnLink="/contact"></Button>
    </article>
  );
}
