import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const PrimaryButton = (props) => {
  return (
    <Button fullWidth type={props.type} color={props.color} variant={props.variant} startIcon={<DeleteIcon />}>
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
