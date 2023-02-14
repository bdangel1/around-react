import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="cards__item card">
      <button className="card__trash-button" type="button"></button>
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like-button"></button>
          <div className="card__likes-count">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
