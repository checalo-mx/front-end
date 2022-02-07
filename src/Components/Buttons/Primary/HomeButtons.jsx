import React from "react";
import { Grid, Typography } from "@mui/material";

const HomeButtons = (props) => {
  return (
    <>
    <Pressable onPress={Window.alert("Funciono")}
    >

      <Grid container justifyContent="center">
        <Grid item>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "300px",
              height: "100px",
              border: "2px solid #2DDA93",
              borderRadius: "10px",
              boxShadow: "1px 5px 5px gray",
              marginTop:"15px",
              marginBottom:"15px"
            }}
          >
            <Grid item xs={4}>
              <img alt="escanerlogo" src={props.svg} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom component="div">
                {" "}
                {props.buttonTitle}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                {props.buttonSubTitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Pressable>
    </>
  );
};

export default HomeButtons;
