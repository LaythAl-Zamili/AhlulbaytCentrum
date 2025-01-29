// src/pages/Home.js
import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import Header from "../components/Header";
import PrayerTimes from "../components/PrayerTimes";
import Footer from "../components/Footer";

const Home = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div>
      <Header />
      <section className="hero">
        <h1>{t("welcome")}</h1> {/* Use the translation for "welcome" */}
        {/* <p>Your spiritual home in the community.</p> */}
      </section>
      <PrayerTimes />
      <Footer />
    </div>
  );
};

export default Home;
