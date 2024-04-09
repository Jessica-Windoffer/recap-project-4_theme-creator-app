import React from "react";
import "./EditForm.css";

export default function EditForm({ onCancel, initialValues }) {
  return (
    <form className="edit-form">
      <h2>Edit Theme</h2>
      <input
        type="text"
        placeholder={initialValues.name || "New Theme Name"}
        className="name-input"
        name="name"
        required
      />
      <button className="edit-form__button-update-theme">Update Theme</button>
      <button className="edit-form__button-cancel-theme" onClick={onCancel}>
        Cancel Editing
      </button>
    </form>
  );
}
