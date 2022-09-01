import "./menu.scss";
import { ExternalLink } from "react-external-link";
import { LinkedIn, Mail } from "@material-ui/icons";

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="social">
        <li>
          <LinkedIn className="icon" />
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/arturas-juskys"
          >
            Art&#363;ras Ju&#353;kys
          </ExternalLink>
        </li>
        <li>
          <a href="#contact">
            <Mail className="icon" />
            <span>arturasjuskys@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
