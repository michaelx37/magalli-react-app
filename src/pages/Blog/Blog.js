import React, { Component } from "react";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <NavBar />
        <main className="blog__main">
          <h1>Blog Page</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Blog;
