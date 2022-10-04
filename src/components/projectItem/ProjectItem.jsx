import React from "react";
import "./projectItem.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiHeroku } from "react-icons/si";

export default function ProjectItem({
  img,
  title,
  desc,
  design = ["Design"],
  functionality = ["Functionality"],
  url,
  github,
  hosted,
  tech,
}) {
  // console.log(hosted);

  return (
    <div className="project-item">
      <Link to="/projects" className="project-item-img">
        <img src={img} alt="project img" />
      </Link>
      <div className="content">
        <div className="project-item-info">
          <a href={url} target="_blank" rel="noreferrer">
            <h3 className="project-item-title">{title}</h3>
          </a>
          <p className="project-item-desc">{desc}</p>
          <h4>Design</h4>
          {design.map((item, i) => (
            <p className="project-item-desc hidden" key={i}>
              {item}
            </p>
          ))}
          <h4>Functionality</h4>
          {functionality.map((item, i) => (
            <p className="project-item-desc hidden" key={i}>
              {item}
            </p>
          ))}
        </div>
        <div className="project-item-tech">
          <div className="links">
            <a
              className="github-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon" />
              Checkout the codebase
            </a>
            <a href={url} target="_blank" rel="noreferrer">
              {hosted === "netlify" ? (
                <SiNetlify className="icon" />
              ) : (
                <SiHeroku className="icon" />
              )}
              and visit the site
            </a>
          </div>
          <ul>
            {tech.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
