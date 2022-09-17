import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

export default function Button({
  btnLink = "test",
  btnText = "test",
  outline = false,
}) {
  return (
    <Link className={!outline ? "button" : "button outline"} to={btnLink}>
      {btnText}
    </Link>
  );
}
