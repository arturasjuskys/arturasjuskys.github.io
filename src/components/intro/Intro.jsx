import "./intro.scss";
import { KeyboardArrowDown, EmojiPeople } from "@material-ui/icons";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const text = (
    <Typewriter
      options={{
        strings: ["Aspiring Front-End", "Back-End Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
  // text.changeDeleteSpeed(100);

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
          {text}
          <a href="#portfolio">
            <KeyboardArrowDown className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
