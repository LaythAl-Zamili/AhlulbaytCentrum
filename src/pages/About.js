// src/pages/About.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <h2>About Us</h2>
        <p>Information about the mosque’s history, mission, and values.</p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
