import { ExternalLink } from "react-external-link";
import "./product.scss";

export default function Product({ title, img, url }) {
  return (
    <div className="product">
      <div className="browser">
        <div className="text">
          <p>{title}</p>
        </div>
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <ExternalLink href={url} rel="noopener noreferrer" target="_blank">
        <img src={img} alt="" />
      </ExternalLink>
    </div>
  );
}
