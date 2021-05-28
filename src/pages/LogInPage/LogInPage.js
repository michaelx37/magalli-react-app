import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";

import "./LogInPage.css";

const LogInPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStoredLogInState = localStorage.getItem("isLoggedIn");

    if (checkStoredLogInState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInputs = {
      email: enteredEmail,
      password: enteredPassword,
    };

    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);

    console.log(userInputs);

    // setEnteredEmail("");
    // setEnteredPassword("");
  };

  return (
    <div className="authentication">
      {/*!isLoggedIn ? <Redirect to="/" /> : ""*/}
      <NavBar />
      <main className="authentication__main">
        <form className="authentication__form" onSubmit={submitHandler}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailInputHandler} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={enteredPassword} onChange={passwordInputHandler} />

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

export default LogInPage;
