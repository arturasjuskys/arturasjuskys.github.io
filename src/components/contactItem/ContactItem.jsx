import React from "react";
import "./contactItem.scss";
import { MdPlace } from "react-icons/md";
import PText from "../pText/PText";

export default function ContactItem({
  icon = <MdPlace className="icon" />,
  text = "this is my info",
}) {
  return (
    <div className="contact-item">
      {icon}
      <PText>{text}</PText>
    </div>
  );
}
