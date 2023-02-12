import React from "react";
import logoUs from "../images/Vector.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logoUs} alt="icon" className="header__icon" />
    </header>
  );
}
