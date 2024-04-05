import "./ColorCardPreview.css";

export default function ColorCardPreview({ colors }) {
  return (
    <ul className="theme-preview">
      {colors.map((color) => (
        <li key={color.role}>
          <div
            className="theme-preview__color"
            style={{ backgroundColor: color.value }}
          ></div>
        </li>
      ))}
    </ul>
  );
}
