import Button from "@mui/material/Button";
import React from "react";

const PrimaryButton = (props) => {
  const {buttonText, ...buttonProps} = props
  return (
    <Button {...buttonProps}>
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;
