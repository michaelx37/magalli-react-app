import React from "react";
import { Link } from "react-router-dom";

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import Footer from "../../components/UI/Footer/Footer";

import "./PrivateArea.css";

const PrivateArea = () => {
  return (
    <div className="authentication">
      <Toolbar />
      <main className="authentication__main">
        <form className="authentication__form">
          <label for="email">Email:</label>
          <input type="email" id="email"></input>

          <label for="password">Password:</label>
          <input type="password" id="password"></input>

          <button type="submit">Log In</button>

          <p>
            Not a member yet? <Link to="/registration-page">Sign up here!</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateArea;
