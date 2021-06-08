import React from "react";

import classes from "./MainPageTarget.module.css";

const MainPageTarget = (props) => {
  return (
    <div className={classes.target__section}>
      <h2 className={classes.target__section__title}>{props.title}</h2>
      <div className={classes.target__section__img}>
        <img src={props.img} alt=""></img>
      </div>
      <div className={classes.target__section__text}>{props.text}</div>
    </div>
  );
};

export default MainPageTarget;
