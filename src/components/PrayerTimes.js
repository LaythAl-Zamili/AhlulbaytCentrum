// src/components/PrayerTimes.js
import React from "react";
import { useTranslation } from "react-i18next";

const PrayerTimes = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <section className="prayer-times">
      <h2>{t("prayerTimes")}</h2> {/* Use the translation for "prayerTimes" */}
      <table>
        <thead>
          <tr>
            <th>{t("prayer")}</th>
            <th>{t("time")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("fajr")}</td>
            <td>5:00 AM</td>
          </tr>
          <tr>
            <td>{t("dhuhr")}</td>
            <td>12:30 PM</td>
          </tr>
          <tr>
            <td>{t("asr")}</td>
            <td>4:00 PM</td>
          </tr>
          <tr>
            <td>{t("maghrib")}</td>
            <td>7:00 PM</td>
          </tr>
          <tr>
            <td>{t("isha")}</td>
            <td>8:30 PM</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PrayerTimes;
