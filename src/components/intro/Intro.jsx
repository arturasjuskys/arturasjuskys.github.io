import "./intro.scss";
import { KeyboardArrowDown, EmojiPeople } from "@material-ui/icons";

export default function Intro() {
  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <EmojiPeople className="icon" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Art&#363;ras Ju&#353;kys</h1>
          <h3>
            Aspiring <span>Developer</span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDown className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
