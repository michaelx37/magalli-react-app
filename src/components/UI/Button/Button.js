import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={[classes.button, classes[props.btnType]].join(" ")} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default Button;
