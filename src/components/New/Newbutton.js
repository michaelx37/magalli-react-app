import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
//import cx from "classnames";

const noop = () => {};

const NewButton = ({ onClick = noop, variant, color, text }) => {
  return (
    <Button onClick={onClick} variant={variant} color={color}>
      {text}
    </Button>
  );
};

export default NewButton;

NewButton.propTypes = {
  /** onClick click del bottone */
  onClick: propTypes.func,
};
