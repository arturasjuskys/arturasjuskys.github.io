import React from "react";
import "./footer.scss";
import PText from "../pText/PText";
import FooterContent from "../footerContent/FooterContent";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="left">
          <h2>Art&#363;ras Ju&#353;kys</h2>
          <PText>
            Aspiring web developer from Peterborough, UK. I love developing
            responsive and fast web apps for today's world of mobile devices.
          </PText>
        </div>
        <div className="right">
          <FooterContent
            heading="Important Links"
            links={[
              {
                title: "Home",
                url: "/",
                type: "Link",
              },
              {
                title: "About",
                url: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                url: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                url: "/contact",
                type: "Link",
              },
            ]}
          />
          <FooterContent
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/arturas-juskys",
              },
              {
                title: "GitHub",
                url: "https://github.com/arturasjuskys",
              },
              {
                title: "Facebook",
                url: "https://www.facebook.com/arturas.ju/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <PText>&#169; 2022 - Developed by Art&#363;ras Ju&#353;kys</PText>
      </div>
    </footer>
  );
}
