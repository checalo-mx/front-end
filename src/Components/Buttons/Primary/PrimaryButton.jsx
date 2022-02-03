import Button from "@mui/material/Button";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <Button type={props.type} color={props.color} variant={props.variant} size={props.size}>
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
