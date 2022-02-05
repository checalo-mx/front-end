import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from '@mui/material/Stack';


const PrimaryButton = (props) => {
    return (
            <Button
                type={props.type}
                color={props.color}
                variant={props.variant}
                size={props.size}
            >
                {props.buttonText}
            </Button>
    );
};

export default PrimaryButton;
