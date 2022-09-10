import { useState } from "react";
import "./slider.scss";
import Product from "./Product";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "eCommerce MERN App",
      img: "screenshots/707 - A Juskys Shop.jpg",
      description:
        "For this project I'm building an e-commerce application REST API using knowledge of server-side web development. At the end this API will have fully functioning CRUD (create, read, update, delete) operations, such as registering an account, browsing products, adding them to basket, and creating an order in the database.",
      url: "https://ajuskys-shop.netlify.app/",
    },
    {
      id: "2",
      title: "Redit API Reader",
      img: "screenshots/706 - Reddit API Reader - Porfolio Project.jpg",
      description:
        "Natours is a final course project where everything is tied together to build the back-end for a travelling agency. This is a RESTful API with functional CRUD (create, read, update, delete) operations, working user page, and basic security measures. Front-side of the final app was provided by the online course.",
      url: "https://ajuskys-reddit.netlify.app/",
    },
    {
      id: "3",
      title: "Natours - Traveling Agency",
      img: "screenshots/687 - Natours - All Tours.jpg",
      description:
        "This project reflects the understanding required to design and build client-side web application. I'm using React-Redux to store and display the data received from Reddit's public JSON API. Posts are displayed in similar fashion as on reddit.com but this project was not meant to be a replica of the original.",
      url: "https://natours-arturas.herokuapp.com/",
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
      <div
        className="arrow-wrapper arrow-wrapper-left"
        onClick={() => handleClick("left")}
      >
        <img
          src="assets/arrow-left-svgrepo-com.svg"
          alt=""
          className="arrow left"
        />
      </div>
      <div
        className="arrow-wrapper arrow-wrapper-right"
        onClick={() => handleClick()}
      >
        <img
          src="assets/arrow-left-svgrepo-com.svg"
          alt=""
          className="arrow right"
        />
      </div>
    </div>
  );
}
