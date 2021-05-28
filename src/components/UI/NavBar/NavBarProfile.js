import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavBarProfile.css";

const ProfileAvatar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStoredLogInState = localStorage.getItem("isLoggedIn");

    if (checkStoredLogInState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  let displayLoggedUser = (
    <li className="navbar__link">
      <NavLink to="/auth" className="link" exact>
        Log In
      </NavLink>
    </li>
  );

  if (isLoggedIn) {
    displayLoggedUser = (
      <li className="navbar__link">
        <button onClick={logOutHandler}>Log Out</button>
        {/* <NavLink to="/" className="link" exact>
          Log Out
        </NavLink> */}
      </li>
    );
  }

  return displayLoggedUser;
};

export default ProfileAvatar;
