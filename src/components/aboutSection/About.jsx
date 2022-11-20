import React from "react";
import "./about.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import PText from "../pText/PText";
import Button from "../button/Button";
import AboutItem from "../aboutItem/AboutItem";
import { skills } from "../../assets/data/data";

export default function About() {
  return (
    <>
      <article className="about-section">
        {/* <div className="left"> */}
        <SectionTitle
          className="section-title"
          subheading="Let me introduce myself"
          heading="About me"
        />
        <PText>
          I believe self development to be top priority in everyone's life,
          including my own professional life. I aspire to become a part of a
          team that develops cutting edge web solutions to everyone.
        </PText>
        <PText>
          Developing technical and problem solving skills have become a big part
          of my life. Personal projects that I'm working on reflect knowledge
          in: Node.js, React, Redux, Express, PostgreSQL, MongoDB, HTML, CSS.
        </PText>
        <PText>
          Through my personal learning experience and projects I gained
          understanding how to program solutions that interact with 3rd party
          APIs and how to design and build RESTful API on my own.
        </PText>
        {/* <div className="about-section-buttons">
            <Button btnLink="/projects" btnText="Projects" />
            <Button btnLink="/about" btnText="About" outline />
          </div> */}
        {/* </div> */}
        {/* <div className="right"></div> */}
      </article>
      <article className="education">
        <h2>Education</h2>
        <AboutItem
          title="School"
          items={["Jurbarkas Vytautas Magnus school, Jurbarkas, Lithuania"]}
        />
        <AboutItem
          title="Collage"
          items={["Peterborough Regional College, Peterborough, UK"]}
        />
        <AboutItem
          title="Online"
          items={[
            "Full-Stack Engineer Career Path, Codecademy",
            "Node.js, Express, MongoDB & More: The Complete Bootcamp, Udemy",
            "Learn Asynchronous JavaScript, Codecademy",
            "The Complete JavaScript Course 2021: From Zero to Hero, Udemy",
            "CompTIA A+ Certification 901. The Total Course",
          ]}
        />
      </article>
      <article className="skills">
        <h2>Skills</h2>
        <AboutItem title="Front-End" items={skills.frontEnd} />
        <AboutItem title="Back-End" items={skills.backEnd} />
        <AboutItem title="Others" items={skills.other} />
      </article>
    </>
  );
}
