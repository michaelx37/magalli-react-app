import React, { Fragment } from "react";

import NavBar from "../../components/UI/NavBar[OLD]/NavBar"
import Footer from "../../components/UI/Footer/Footer";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={classes.aboutUs__main}>
        <h1>About Us Page</h1>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
