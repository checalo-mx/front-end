import React from "react";
import { Grid, Typography } from "@mui/material";

const HomeButtons = (props) => {
  return (
    <div>
      <Grid container spacing={{ xs: 2 }} justifyContent="center">
        <Grid item xs={10}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              border: "2px solid #2DDA93",
              width: "300px",
              height: "100px",
              borderRadius: "10px",
              boxShadow: "1px 5px 5px gray",
            }}
          >
            <Grid item xs={10}>
              <Grid container justifyContent="center">
                <Grid item xs={10}>
                  <img alt="escanerlogo" src={props.svg} />
                </Grid>
              </Grid>
              <Grid item xs={10}>
                <Grid container justifyContent="center">
                  <Grid item xs={10}>
                    <Typography variant="h6" gutterBottom component="div">
                      Heading
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      subtitle1.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeButtons;
