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
    </main>
  );
};
