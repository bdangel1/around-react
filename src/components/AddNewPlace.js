import React from "react";
import PopupWithForm from "./PopupWithForm";
export default function AddNewPlace({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="New place"
      name="popup popup_type_add-card"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__fieldset">
        <input
          id="title_input"
          type="text"
          className="form__input form__input_type_title"
          placeholder="Title"
          name="title"
          required
          minLength="1"
          maxLength="30"
        />
        <span id="title_input-error" className="form__input-error"></span>

        <input
          id="link_input"
          type="url"
          className="form__input form__input_type_url"
          placeholder="image URL"
          name="link"
          required
        />
        <span id="link_input-error" className="form__input-error"></span>
        <button type="submit" className="form__button">
          Save
        </button>
      </fieldset>
    </PopupWithForm>
  );
}
