import React /*, { useState, useEffect }*/ from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../../store/store";

import "./NavBarProfile.css";

const ProfileAvatar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkStoredLogInState = localStorage.getItem("isLoggedIn");

  //   if (checkStoredLogInState === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  let displayLoggedUser = (
    <li className="navbar__link">
      <NavLink to="/auth" className="link" exact>
        Log In
      </NavLink>
    </li>
  );

  if (isLogged) {
    displayLoggedUser = (
      <li className="navbar__link">
        <button onClick={logoutHandler}>Log Out</button>
        {/* <NavLink to="/" className="link" exact>
          Log Out
        </NavLink> */}
      </li>
    );
  }

  return displayLoggedUser;
};

export default ProfileAvatar;
