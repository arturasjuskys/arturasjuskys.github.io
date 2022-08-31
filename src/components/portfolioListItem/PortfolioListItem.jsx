import "./portfolioListItem.scss";

export default function PortfolioListItem({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfolioListItem active" : "portfolioListItem"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
