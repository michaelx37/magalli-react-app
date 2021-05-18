import React, { Component } from "react";
import { Link } from "react-router-dom";

import Toolbar from "../../components/UI/Toolbar/Toolbar";
// import SiteDescription from "../../components/SiteDescription/SiteDescription";
import MainPageCards from "../../components/MainPageCards/MainPageCards";
import Footer from "../../components/UI/Footer/Footer";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Toolbar />
        <main className="home__main">
          <div className="welcome">
            <div className="welcome__image">
              <img src="" alt=""></img>
            </div>
            <div className="welcome__message">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                consectetur adipiscing elit. Maecenas felis felis, commodo et massa ut, semper varius nisi. Vestibulum
                bibendum urna eget purus maximus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Mauris eget nulla maximus, dignissim turpis sit amet, congue neque.
                Suspendisse in lobortis est, dictum facilisis diam. Etiam odio urna, scelerisque in ex nec, semper
                luctus lacus.
              </p>
              <Link to="/search" className="">
                Get started!
              </Link>
            </div>
          </div>
          {/* <SiteDescription /> */}
          <MainPageCards />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
