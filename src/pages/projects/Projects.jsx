// import React, { useEffect, useState } from "react";
import React from "react";
import "./projects.scss";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../../components/projectItem/ProjectItem";
import { projects } from "../../assets/data/data";

export default function Projects() {
  // const [projectData, setProjectData] = useState(projects);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   if (searchTerm === "") return;
  //   setProjectData(() => {
  //     return projects.filter(item =>
  //       item.title.toLowerCase().match(searchTerm.toLowerCase())
  //     );
  //   });
  // }, [searchTerm]);

  // const handleChange = e => {
  //   e.preventDefault();
  //   setSearchTerm(e.target.value);

  //   // this fixes issue when search field is empty but not all items are displayed
  //   if (e.target.value.length === 0) {
  //     setProjectData(projects);
  //   }
  // };

  return (
    <main className="project-page">
      <article className="top">
        <SectionTitle heading="Projects" subheading="Some of my personal" />
        <form className="search-bar">
          {/* <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Project Name"
          /> */}
          <MdSearch className="icon" />
        </form>
      </article>
      <article className="projects">
        {projects.map((item, i) => (
          <ProjectItem {...item} key={i} />
        ))}
      </article>
    </main>
  );
}
