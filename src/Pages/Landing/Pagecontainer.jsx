import React from "react";
import { Container, Grid } from "@mui/material";
import CardTitle from "../../Components/Titles/CardTitle";
import Button from "@mui/material/Button";

const Pagecontainer = (props) => {
  return (
    <div>
      <Container
      continerColor={props.continerColor}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid red",
          width: "380px",
          height: "640px",
          marginTop: "8px",
          bgcolor:"#0000",
        }}
      >
        <h1>{props.titleText}</h1>
        <p>{props.containerText}</p>
        <Button
          fullWidth
          type={props.buttonType}
          color={props.buttonColot}
          variant={props.buttonVariant}
          disabled={props.disabled}
        >
          {props.buttonText}
        </Button>
            <img alt="UI" src={props.svg}/>
      </Container>
    </div>
  );
};

export default Pagecontainer;
