import React from "react";

//import LogoImg from '../../../assets/logo192.png';
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      {/*<img src="https://i.dlpng.com/static/png/6976536_preview.png" className="logo" alt=""></img>*/}
      <img
        src="https://www.pikpng.com/pngl/b/97-972411_dragon-white-dragon-logo-png-clipart.png"
        className={classes.logo}
        alt=""
      ></img>
    </div>
  );
};

export default Logo;
