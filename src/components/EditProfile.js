import React from "react";
import PopupWithForm from "./PopupWithForm";
export default function EditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Edit profile"
      name="popup popup_type_profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Save"}
    >
      <fieldset className="form__fieldset">
        <input
          id="name_input"
          type="text"
          className="form__input form__input_type_name"
          placeholder="Name"
          name="name"
          required
          minLength={2}
          maxLength={40}
        />
        <span id="name_input-error" className="form__input-error"></span>
        <input
          id="job_input"
          type="text"
          //   value={name}
          className="form__input form__input_type_job"
          placeholder="About me"
          name="job"
          required
          minLength={2}
          maxLength={400}
        />
        <span id="job_input-error" className="form__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
