import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            sfMove.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 942 74</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sfmove@dev.io</span>
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
