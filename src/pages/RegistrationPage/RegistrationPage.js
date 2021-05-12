import React from "react";
import { Link } from "react-router-dom";

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import Footer from "../../components/UI/Footer/Footer";

import "./RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="registration">
      <Toolbar />
      <main className="registration__main">
        <form className="registration__form">
          <label for="first-name">First name:</label>
          <input type="text" id="first-name"></input>

          <label for="last-name">Last name:</label>
          <input type="text" id="last-name"></input>

          <label for="password">Password:</label>
          <input type="password" id="password"></input>

          <label for="email">Email:</label>
          <input type="email" id="email"></input>

          <label for="username">Username:</label>
          <input type="text" id="username"></input>

          <label for="user-role">Register as:</label>
          <select id="user-role">
            <option value="gamer">Gamer</option>
            <option value="company">Company</option>
          </select>

          <input type="checkbox" id="agree-terms"></input>
          <label for="agree-terms">
            Agree to <Link>Terms &amp; Conditions</Link>
          </label>

          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
