import React from "react";
import "./PageMain.sass";

export const PageMain = () => {
  return (
    <main className="main">
      <section className="results-section">
        <div className="wrapper">

          <div className="results-section__text">
            <p className="results-section__text__top flex-center">ТОЧНЫЕ РЕЗУЛЬТАТЫ</p>
            <p className="results-section__text__bottom flex-center">ТОЧНО В СРОК</p>
          </div>

          <div className="results-section__kapibara">
            <img className="results-section__kapibara__img" src="./images/kapibara.png" alt='Kapibara' />
          </div>

        </div>
      </section>

      <section className="laboratory-section" id="laboratory">
        <h1 className="laboratory-section__description wrapper">Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!</h1>
        
        <div className="laboratory-box">
          <div className="wrapper">
            
            <div className="laboratory-box__content">
              <h2 className="laboratory-box__content__title">Лаборатория</h2>
              <p className="laboratory-box__content__text">Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.</p>
              <p className="laboratory-box__content__text">Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</p>
              <a className="laboratory-box__content__btn flex-center" href="#feedback"><span>Оставить заявку</span><img src="./images/svg/arrow.svg" alt="Arrow"/></a>
            </div>

            <img className="laboratory-box__img" src="./images/kapibara-lab.jpg" />
            <h2 className="laboratory-box__title-mobile">Лаборатория</h2>
          </div>

        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="wrapper">
          <h2 className="gallery-section__title">Галерея</h2>

          <div className="gallery">
            <div className="gallery__box-img gallery__box-img_big"><img src="./images/gallery1.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img gallery__box-img_wide"><img src="./images/gallery4.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img"><img src="./images/gallery5.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img"><img src="./images/gallery6.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img"><img src="./images/gallery2.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img"><img src="./images/gallery3.jpg" alt="Laboratory" /></div>
            <div className="gallery__box-img gallery__box-img_wide"><img src="./images/gallery7.jpg" alt="Laboratory" /></div>
          </div>
        </div>
      </section>
    </main>
  );
};
