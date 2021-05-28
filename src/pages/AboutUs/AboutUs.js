import React from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <NavBar />
      <main className="about-us__main">
        <h1>About Us Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
