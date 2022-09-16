import React from "react";
import "./sectionTitle.scss";

export default function SectionTitle({
  subheading = "This is subheading",
  heading = "This is heading",
}) {
  return (
    <div className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </div>
  );
}
