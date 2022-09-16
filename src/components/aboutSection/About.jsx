import React from "react";
import "./about.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import PText from "../pText/PText";
import Button from "../button/Button";

export default function About() {
  return (
    <article className="about-section">
      <div className="left">
        <SectionTitle
          className="section-title"
          subheading="Let me introduce myself"
          heading="About me"
        />
        <PText>
          I believe self development to be top priority in everyone's life,
          including my own professional life. I aspire to become a part of a
          team that develops cutting edge web solutions for everyone. Developing
          technical and problem solving skills have become a big part of my
          life. Personal projects that I'm working on reflect knowledge in:
          Node.js, React, Redux, Express, PostgreSQL, MongoDB, HTML, CSS.
        </PText>
        <PText>
          Through my personal learning experience and projects I gained
          understanding how to program solutions that interact with 3rd party
          APIs and how to design and build RESTful API on my own.
        </PText>
        <div className="about-section-buttons">
          <Button btnLink="/projects" btnText="Projects" />
          <Button btnLink="/about" btnText="About" outline />
        </div>
      </div>
      {/* <div className="right"></div> */}
    </article>
  );
}
