import React from "react";
import "../components/Header.sass";

export const Header = () => {
  return <header className="header">
    <div className="header-wrapper">
      <div className="header__logo">
        <img src="./images/svg/logo.svg" alt="Logo" />
        <p>Современные методики диагностики</p>
      </div>

      <nav className="header__menu">
        <ul className="header__menu__list">
          <li className="header__menu__list__item header__menu__list__item_active">Лаборатория</li>
          <li className="header__menu__list__item">Галерея</li>
          <li className="header__menu__list__item">Оставить заявку</li>
        </ul>
      </nav>

      <a className="header__link" href="tel:+71234567890">
        <img className="header__link__img" src="./images/svg/phone.svg" />
        <div className="header__link__phone">
          +7 123 456 7890
          <p>Звонок бесплатный</p>
        </div>
      </a>
    </div>
  </header>;
};