import React from "react";

import "./MainPageTarget.css";

const MainPageTarget = (props) => {
  return (
    <div className="target__section">
      <h2 className="target__section__title">{props.title}</h2>
      <div className="target__section__img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="target__section__text">{props.text}</div>
    </div>
  );
};

export default MainPageTarget;
