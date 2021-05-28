import React, { Component } from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import "./News.css";

class News extends Component {
  render() {
    return (
      <div className="news">
        <NavBar />
        <main className="news__main">
          <h1>News Page</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default News;
