import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
// import Product from "../slider/Product";

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        {/* {featuredPortfolio.map(item => (
          <Product
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
          />
          // <h3></h3>
        ))} */}
      </div>
    </div>
  );
}
