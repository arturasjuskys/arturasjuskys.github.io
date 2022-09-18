import React from "react";
import "./contactBanner.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import Button from "../button/Button";

export default function ContactBanner() {
  return (
    <article className="contact-banner">
      <SectionTitle
        heading="Let me help you"
        subheading="Have a project in mind"
      />
      <Button btnText="Contact Now" btnLink="/contact"></Button>
    </article>
  );
}
