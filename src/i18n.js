// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Ahlulbayt Centrum",
      home: "Home",
      about: "About Us",
      events: "Events",
      contact: "Contact Us",
      blog: "Blog",
      prayerTimes: "Prayer Times",
      prayer: "Prayer",
      time: "Time",
      fajr: "Fajr",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
  },
  ar: {
    translation: {
      welcome: "(ع) مرحبًا بكم في مركز أهل البيت",
      home: "الرئيسية",
      about: "من نحن",
      events: "الفعاليات",
      contact: "اتصل بنا",
      blog: "المدونة",
      prayerTimes: "أوقات الصلاة",
      prayer: "الصلاة",
      time: "الوقت",
      fajr: "الفجر",
      dhuhr: "الظهر",
      asr: "العصر",
      maghrib: "المغرب",
      isha: "العشاء",
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources, // Translation resources
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already protects against XSS
  },
});

export default i18n;
