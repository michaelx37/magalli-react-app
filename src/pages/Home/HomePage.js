import React, { Fragment } from "react";
import Footer from "../../components/UI/Footer/Footer";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <main className={classes.home_main}>
        <div className={classes.welcome}>
          <div className={classes.welcome_message}>
            <h2>Leggi</h2>
            <p>
             poi leggi questo
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}


export default HomePage;
