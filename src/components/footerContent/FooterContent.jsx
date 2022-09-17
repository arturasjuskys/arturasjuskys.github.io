import React from "react";
import "./footerContent.scss";
import { Link } from "react-router-dom";

export default function FooterContent({
  heading = "Column Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      url: "/home",
    },
    {
      type: "Link",
      title: "About",
      url: "/about",
    },
  ],
}) {
  return (
    <div className="footer-section-column">
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, i) => (
          <li key={i}>
            {item.type === "Link" ? (
              <Link to={item.url}>{item.title}</Link>
            ) : (
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
