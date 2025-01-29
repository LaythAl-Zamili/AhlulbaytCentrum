// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import logo from '../images/logo.png'; // Import the logo

const Header = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation function and i18n instance

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Ahlulbayt Centrum Logo" />{" "}
        {/* Use the imported logo */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("about")}</Link>
          </li>
          <li>
            <Link to="/events">{t("events")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li>
            <Link to="/blog">{t("blog")}</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ar")}>العربية</button>
      </div>
    </header>
  );
};

export default Header;
