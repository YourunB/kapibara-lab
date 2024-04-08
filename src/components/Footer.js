import React from "react";
import "../components/Footer.sass";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p>Все права защищены Российской Ассоциацией Капибар</p>
        <img src="./images/svg/logo-footer.svg" alt="Logo" />
      </div>
    </footer>
  );
};
