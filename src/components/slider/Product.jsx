import "./product.scss";

export default function Product({ title, img }) {
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
      <a href="/" target="_blank">
        <img src={img} alt="" />
      </a>
    </div>
  );
}
