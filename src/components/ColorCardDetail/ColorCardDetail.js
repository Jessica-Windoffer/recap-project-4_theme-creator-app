import "./ColorCardDetail.css";
import ColorCard from "../ColorCard/ColorCard";

export default function ColorCardDetail({ colors }) {
  return (
    <ul className="color-list">
      {colors.map((color) => (
        <li key={color.role}>
          <ColorCard color={color} />
        </li>
      ))}
      <button className="color-list__delete-button" type="submit">
        Delete
      </button>
    </ul>
  );
}
