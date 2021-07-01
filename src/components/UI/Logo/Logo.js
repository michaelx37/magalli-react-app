import React from "react";
import classes from "./Logo.module.css";
import cx from "classnames";
import SiteLogo from "../../../assets/png/logo_sito.png";

const Logo = ({ className }) => {
  return <img src={SiteLogo} className={cx(classes.logo, className)} alt="" />;
};

export default Logo;
