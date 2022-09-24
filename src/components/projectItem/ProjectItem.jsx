import React from "react";
import "./projectItem.scss";
import { Link } from "react-router-dom";

export default function ProjectItem({ img, title, desc, url, tech }) {
  // console.log(tech);

  return (
    <div className="project-item">
      <Link to="/projects" className="project-item-img">
        <img src={img} alt="project img" />
      </Link>
      <div className="project-item-info">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="project-item-title">{title}</h3>
        </a>
        <p className="project-item-desc">{desc}</p>
      </div>
      <div className="project-item-tech">
        <ul>
          {tech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
