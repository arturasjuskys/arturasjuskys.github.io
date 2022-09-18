import React from "react";
import "./contactSection.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactItem from "../contactItem/ContactItem";
import { MdEmail } from "react-icons/md";
import ContactForm from "../contactForm/ContactForm";

export default function ContactSection() {
  return (
    <article className="contact-section">
      <SectionTitle heading="Contact" subheading="Get in touch" />
      <div className="wrapper">
        <div className="left">
          <ContactItem
            icon={<MdEmail className="icon" />}
            text="arturasjuskys@gmail.com"
          />
          <ContactItem text="Peterborough, Cambridgeshire, UK" />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
