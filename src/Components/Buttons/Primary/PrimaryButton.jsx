import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const PrimaryButton = (props) => {
  return (
    <Button type={props.type} color={props.color} startIcon={props.startIcon} variant={props.variant} size={props.size} className={props.classes}>
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
