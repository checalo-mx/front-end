import Button from "@mui/material/Button";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <Button {...props} type={props.type} color={props.color} startIcon={props.startIcon} variant={props.variant} size={props.size} className={props.classes}>
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
