import Button from "@mui/material/Button";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <Button fullWidth type={props.type} color={props.color} variant={props.variant}>
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
