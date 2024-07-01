import React, { useRef, useState } from "react";
import "../components/FormFeedback.sass";

export const FormFeedback = () => {
  const [showMsg, setShowMsg] = useState(false);

  const refInputSurname = useRef(null);
  const refInputName = useRef(null);
  const refInputPatronymic = useRef(null);

  function checkInputs(e) {
    if (
      refInputSurname.current.checkValidity() &&
      refInputName.current.checkValidity() &&
      refInputPatronymic.current.checkValidity()
    ) {
      e.preventDefault();
      setShowMsg(true);
    }
  }

  function addValidate(element) {
    console.log(element);
    if ((element.className = "feedback-form__box-inputs__input")) {
      element.className =
        "feedback-form__box-inputs__input feedback-form__box-inputs__input_validate";
    }
  }

  let formMsg = (
    <div className="feedback-form__message flex-center">
      <div className="feedback-form__message-wrapper flex-center">
        <img src="./images/svg/check-circle.svg" alt="Info" />
        <p className="feedback-form__message__text">
          Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее
          время.
        </p>
      </div>
    </div>
  );

  return (
    <form className="feedback-form" action="/action_page.php" method="get">
      <h3 className="feedback-form__title">Заявка на диагностику</h3>
      <p className="feedback-form__description">
        Доверьте свои медицинские исследования надежным капибарам-лаборантам и
        получите качественные результаты в кратчайшие сроки!
      </p>
      <fieldset className="feedback-form__box-inputs">
        <input
          className="feedback-form__box-inputs__input"
          ref={refInputSurname}
          onInput={(event) => {
            addValidate(event.target);
          }}
          autoComplete="off"
          placeholder="Фамилия"
          id="input-surname"
          pattern="[a-zA-Zа-яА-Я\-]*"
          type={"text"}
          minLength={2}
          required
        ></input>
        <input
          className="feedback-form__box-inputs__input"
          ref={refInputName}
          onInput={(event) => {
            addValidate(event.target);
          }}
          autoComplete="off"
          placeholder="Имя"
          id="input-name"
          pattern="[a-zA-Zа-яА-Я\-]*"
          type={"text"}
          minLength={2}
          required
        ></input>
        <input
          className="feedback-form__box-inputs__input"
          ref={refInputPatronymic}
          onInput={(event) => {
            addValidate(event.target);
          }}
          autoComplete="off"
          placeholder="Отчество"
          id="input-patronymic"
          pattern="[a-zA-Zа-яА-Я\-]*"
          type={"text"}
          minLength={2}
          required
        ></input>
      </fieldset>
      <button
        onClick={(e) => checkInputs(e)}
        className="feedback-form__btn flex-center"
      >
        Отправить
        <img src="./images/svg/check.svg" alt="Check" />
      </button>
      {(formMsg = showMsg ? formMsg : null)}
    </form>
  );
};
