import React, { useRef } from "react";
import "../components/Header.sass";

export const Header = () => {
  const menuLaboratoryItem = useRef(null);
  const menuGalleryItem = useRef(null);
  const menuFeedbackItem = useRef(null);

  function updateMenuItem(e) {
    menuLaboratoryItem.current.className = "header__menu__list__item";
    menuGalleryItem.current.className = "header__menu__list__item";
    menuFeedbackItem.current.className = "header__menu__list__item";
    e.currentTarget.className =
      "header__menu__list__item header__menu__list__item_active";
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header__logo">
          <img src="./images/svg/logo.svg" alt="Logo" />
          <p>Современные методики диагностики</p>
        </div>

        <nav className="header__menu">
          <ul className="header__menu__list">
            <li
              ref={menuLaboratoryItem}
              onClick={(e) => updateMenuItem(e)}
              className="header__menu__list__item header__menu__list__item_active"
            >
              <a href="#laboratory">Лаборатория</a>
            </li>
            <li
              ref={menuGalleryItem}
              onClick={(e) => updateMenuItem(e)}
              className="header__menu__list__item"
            >
              <a href="#gallery">Галерея</a>
            </li>
            <li
              ref={menuFeedbackItem}
              onClick={(e) => updateMenuItem(e)}
              className="header__menu__list__item"
            >
              <a href="#feedback">Оставить заявку</a>
            </li>
          </ul>
        </nav>

        <a className="header__link" href="tel:+71234567890">
          <img
            className="header__link__img"
            src="./images/svg/phone.svg"
            alt="Phone"
          />
          <div className="header__link__phone">
            +7 123 456 7890
            <p>Звонок бесплатный</p>
          </div>
        </a>
      </div>
    </header>
  );
};
