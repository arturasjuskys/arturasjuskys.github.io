import { useState } from "react";
import "./slider.scss";
import Product from "./Product";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Redit API Reader",
      img: "screenshots/684 - Reddit API Reader - Porfolio Project.jpg",
      url: "https://reading-reddit-api.netlify.app/",
    },
    {
      id: "2",
      title: "Natours - Traveling Agency",
      img: "screenshots/687 - Natours - All Tours.jpg",
      url: "https://natours-arturas.herokuapp.com/",
    },
    {
      id: "3",
      title: "eCommerce MERN App",
      img: "screenshots/688 - eCommerce React App.jpg",
      url: "https://github.com/arturasjuskys/eCommerce-MERN_Stack",
    },
  ];

  const handleClick = side => {
    side === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(item => (
          <div key={item.id} className="container">
            <Product title={item.title} img={item.img} url={item.url} />
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
