import React from "react";
import "../components/FormFeedback.sass";

export const FormFeedback = () => {
  return (
    <form className="feedback-form" action="/action_page.php" method="get">
      <h3 className="feedback-form__title">Заявка на диагностику</h3>
      <p className="feedback-form__description">Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
      <fieldset className="feedback-form__box-inputs">
        <input className="feedback-form__box-inputs__input" autoComplete="off" placeholder="Фамилия" id="input-surname" pattern="^[a-zA-Zа-яА-Я-]*$" type={'text'} min={2} required></input>
        <input className="feedback-form__box-inputs__input" autoComplete="off" placeholder="Имя" id="input-name" pattern="^[a-zA-Zа-яА-Я-]*$" type={'text'} min={2} required></input>
        <input className="feedback-form__box-inputs__input" autoComplete="off" placeholder="Отчество" id="input-patronymic" pattern="^[a-zA-Zа-яА-Я-]*$" type={'text'} min={2} required></input>
      </fieldset>
      <button className="feedback-form__btn flex-center">Отправить<img src="./images/svg/check.svg" alt="Check" /></button>
      
      <div className="feedback-form__message flex-center">
        <div className="feedback-form__message-wrapper flex-center">
          <img src="./images/svg/check-circle.svg" alt="Info" />
          <p className="feedback-form__message__text">Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
        </div>
      </div>
      
    </form>
  );
};
