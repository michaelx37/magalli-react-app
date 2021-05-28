import React /*, { useState }*/ from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import "./RegistrationPage.css";

const RegistrationPage = () => {
  //const [enteredEmail, setEnteredEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("");
  };

  return (
    <div className="registration">
      <NavBar />
      <main className="registration__main">
        <form className="registration__form" onSubmit={submitHandler}>
          <label htmlFor="first-name">First name:</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last name:</label>
          <input type="text" id="last-name" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="user-role">Register as:</label>
          <select id="user-role">
            <option value="gamer">Gamer</option>
            <option value="company">Company</option>
          </select>

          <input type="checkbox" id="agree-terms" />
          <label htmlFor="agree-terms">
            Agree to <Link to="">Terms &amp; Conditions</Link>
          </label>

          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
