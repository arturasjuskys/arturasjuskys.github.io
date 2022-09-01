import "./topbar.scss";
import { Mail, LinkedIn } from "@material-ui/icons";
import { ExternalLink } from "react-external-link";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AJ
          </a>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/arturas-juskys"
            >
              Art&#363;ras Ju&#353;kys
            </ExternalLink>
          </div>
          <div className="itemContainer">
            <a href="#contact">
              <Mail className="icon" />
              <span>arturasjuskys@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="lin1"></span>
            <span className="lin2"></span>
            <span className="lin3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
