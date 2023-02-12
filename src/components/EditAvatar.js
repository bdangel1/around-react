import React from "react";
import PopupWithForm from "./PopupWithForm";
export default function editAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Update profile picture"
      name="popup popup_type_avatar"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="form__fieldset">
        <input
          id="link_input-avatar"
          type="url"
          className="form__input form__input_type_url"
          placeholder="image URL"
          name="link"
          required
        />
        <span id="link_input-avatar-error" className="form__input-error"></span>
        <button type="submit" className="form__button">
          Save
        </button>
      </fieldset>
    </PopupWithForm>
  );
}
