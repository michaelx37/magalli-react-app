import React, { Fragment, useState /*, useEffect */ } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";
import { authActions } from "../../store/store";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const history = useHistory();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkStoredLogInState = localStorage.getItem("isLoggedIn");

  //   if (checkStoredLogInState === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

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

  // const loginHandler = (event) => {
  //   event.preventDefault();

  //   const userInputs = {
  //     email: enteredEmail,
  //     password: enteredPassword,
  //   };

  //   localStorage.setItem("isLoggedIn", "true");
  //   setIsLoggedIn(true);

  //   console.log(userInputs);

  //   // setEnteredEmail(""); //will clear imputs on submit
  //   // setEnteredPassword("");

  //   history.replace("/");
  // };

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());

    history.replace("/");
  };

  return (
    <Fragment>
      <NavBar />
      <main className={classes.authentication__main}>
        <form className={classes.authentication__form} onSubmit={loginHandler}>
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
    </Fragment>
  );
};

export default LoginPage;
