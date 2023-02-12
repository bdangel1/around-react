import React from "react";
export default function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name} ${props.isOpen ? "popup_open" : ""}`}>
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="submit"
          onSubmit={props.onSubmit}
          className="form popup__form"
          name={props.name}
        >
          {props.children}
          <fieldset className="form__fieldset">
            {/* <button className="form__button" type="submit">
              {props.buttonText}
            </button> */}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
