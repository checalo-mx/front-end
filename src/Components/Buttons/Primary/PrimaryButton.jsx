import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const PrimaryButton = (props) => {
  return (
<<<<<<< HEAD
    <Button type={props.type} color={props.color} startIcon={props.startIcon} variant={props.variant} size={props.size} className={props.classes}>
=======
<<<<<<< HEAD
    <Button fullWidth type={props.type} color={props.color} variant={props.variant} startIcon={<DeleteIcon />}>
=======
    <Button type={props.type} color={props.color} startIcon={props.startIcon} variant={props.variant} size={props.size} className={props.classes}>
>>>>>>> 81f03fe4bc329aef47fa683144a53e0dc407b9e5
>>>>>>> feature/ConfiguracionAlimentacion
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
