import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
// import "../index.css";
import EditProfile from "./EditProfile.js";
import AddNewPlace from "./AddNewPlace.js";
import EditAvatar from "./EditAvatar.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  // set state
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

  // event handlers
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePreviewOpen(false);
  };

  const handleCardClick = (card) => {
    setIsImagePreviewOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  };
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddNewPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <section className="cards">
          <ul className="cards__list" />
        </section>
        {/* delete popup  */}
        <div className="popup popup_type_confirm-delete">
          <div className="popup__content">
            <button
              type="button"
              className="popup__close popup__close_card"
            ></button>
            <h2 className="popup__title">Are you sure</h2>
            <form
              name="new-place"
              className="popup__form popup__form_card form"
              noValidate
            >
              <fieldset className="form__fieldset">
                <button type="submit" className="form__button">
                  Yes
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        {/* 3rd popup  */}
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePreviewOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
