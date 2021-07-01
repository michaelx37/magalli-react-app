import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <NavBar/>
      <main className={classes.home_main}>
        <div className={classes.welcome}>
          <div className={classes.welcome_message}>
            <h2>Leggi</h2>
            <p>
             poi leggi questo
            </p>
            <Link to="/search" className={""}>
              Clicca il link
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}


export default HomePage;
