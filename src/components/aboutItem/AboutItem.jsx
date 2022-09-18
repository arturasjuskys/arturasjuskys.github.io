import React from "react";
import "./aboutItem.scss";

export default function AboutInfoItem({
  title = "This is title",
  items = ["HTML", "CSS"],
}) {
  return (
    <div className="about-item">
      <h3>{title}</h3>
      <div className="items">
        {items.map((item, i) => (
          <span className="item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
