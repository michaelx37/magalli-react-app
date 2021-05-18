import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.navbar}>
        <ul className={classes.navbar__links}>
          <li className={classes.navbar__link}>
            <Link to="/" className={classes.link}>
              Support
            </Link>
          </li>
          <li className={classes.navbar__link}>
            <Link to="/" className={classes.link}>
              Terms of Use
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
