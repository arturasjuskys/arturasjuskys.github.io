import React from "react";
import "./pText.scss";

export default function PText(props) {
  return (
    <div className="p-text-component">
      <p>{props.children}</p>
    </div>
  );
}
