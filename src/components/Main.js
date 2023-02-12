import React, { useState, useEffect } from "react";
import profileChange from "../images/edit.svg";
import { api } from "../utils/Api";
import Card from "./Card";
export default function Main({
  onEditProfileClick,
  onEditAvatarClick,
  onAddPlaceClick,
  onCardClick,
}) {
  // set state
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);
  // useEffect api
  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData);
        setUserDescription(userData);
        setUserAvatar(userData);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__change-hide">
            <button
              // onClick={onEditAvatarClick}
              type="button"
              className="profile__change-button"
            >
              <img
                className="profile__change-button-icon"
                alt="vector of edit icon"
                src={profileChange}
              />
            </button>
          </div>

          <img
            style={{ backgroundImage: `url(${userAvatar})` }}
            onClick={onEditAvatarClick}
            // src={userAvatar.avatar}
            alt="profile
              pic"
            className="profile__image"
          />
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__name-info">{userName.name}</h1>
              <button
                onClick={onEditProfileClick}
                type="button"
                className="profile__name-button"
              />
            </div>
            <p className="profile__info-job">{userDescription.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlaceClick}
          type="button"
          className="profile__button-add"
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
