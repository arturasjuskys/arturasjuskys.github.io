import React from "react";
import "./hero.scss";
import HeroImg1 from "../../assets/images/20221029_154022_2.jpg";
// import HeroImg1 from "../../assets/images/20221111_151350.jpg";
// import PText from "../pText/PText";
import Button from "../button/Button";
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../../assets/images/scroll-down-arrow.svg";

export default function Hero() {
  return (
    <article className="hero-section">
      <h1 className="hero-heading">
        <span>Hello, This is</span>
        <span className="hero-name">Art&#363;ras Ju&#353;kys</span>
      </h1>
      <div className="hero-image">
        <img src={HeroImg1} alt="" />
      </div>
      <div className="hero-info">
        {/* <PText>
          I aspire to become Full-Stack developer and be a part of a team that
          develops cutting edge web solutions to everyone.
        </PText> */}
        {/* <Button btnLink="/projects" btnText="See my projects" outline={false} /> */}
        <a
          className="button-cv"
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1Z5zLO_r5moZZeKcn6R8tBnHn6-y32fDJ/view?usp=sharing"
        >
          View & Download My CV
        </a>
      </div>
      <div className="hero-social">
        <div className="hero-social-indicator">
          <p>Follow</p>
          <img src={SocialMediaArrow} alt="" />
        </div>
        <div className="hero-social-text">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/arturas-juskys/"
                target="_blank"
                rel="noreferrer"
              >
                LI
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arturasjuskys"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-scroll-down">
        <p>Scroll</p>
        <img src={ScrollDownArrow} alt="" />
      </div>
    </article>
  );
}
