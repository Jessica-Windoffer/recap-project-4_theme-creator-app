import "./ColorCardDetail.css";
import ColorCard from "../ColorCard/ColorCard";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function ColorCardDetail({ colors, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <ul className="color-list">
      {colors.map((color) => (
        <li key={color.role}>
          <ColorCard color={color} />
        </li>
      ))}
      {!isEditing ? (
        <button className="color-list__edit-button" onClick={handleEditClick}>
          Edit
        </button>
      ) : null}
      <button onClick={onDelete} className="color-list__delete-button">
        Delete
      </button>
      {isEditing && <EditForm onCancel={handleCancelEdit} initialValues={{}} />}
    </ul>
  );
}
