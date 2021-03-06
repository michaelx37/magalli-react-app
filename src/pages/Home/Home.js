import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/UI/NavBar/NavBar";
import MainPageTarget from "../../components/MainPageTarget/MainPageTarget";
import Footer from "../../components/UI/Footer/Footer";

import classes from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className={classes.home__main}>
          <div className={classes.welcome}>
            <div className={classes.welcome__image}>
              <img src="https://www.pikpng.com/pngl/b/97-972411_dragon-white-dragon-logo-png-clipart.png" alt=""></img>
            </div>
            <div className={classes.welcome__message}>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi. Vestibulum
                bibendum urna eget purus maximus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Mauris eget nulla maximus, dignissim turpis sit amet, congue neque.
                Suspendisse in lobortis est, dictum facilisis diam. Etiam odio urna, scelerisque in ex nec, semper
                luctus lacus.
              </p>
              <Link to="/search" className={""}>
                Get started!
              </Link>
            </div>
          </div>
          <MainPageTarget
            title="Target 1"
            img="https://www.transparentpng.com/thumb/target/photos-clipart-png-target-2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi. Vestibulum bibendum urna eget purus maximus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eget nulla maximus, dignissim turpis sit amet, congue neque. Suspendisse in lobortis est, dictum facilisis diam."
          />
          <MainPageTarget
            title="Target 2"
            img="https://www.transparentpng.com/thumb/target/photos-clipart-png-target-2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi. Vestibulum bibendum urna eget purus maximus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eget nulla maximus, dignissim turpis sit amet, congue neque. Suspendisse in lobortis est, dictum facilisis diam."
          />
          <MainPageTarget
            title="Target 3"
            img="https://www.transparentpng.com/thumb/target/photos-clipart-png-target-2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi. Vestibulum bibendum urna eget purus maximus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eget nulla maximus, dignissim turpis sit amet, congue neque. Suspendisse in lobortis est, dictum facilisis diam."
          />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
