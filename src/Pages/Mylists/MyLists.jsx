import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Background from "../../Components/Backgrounds/Background";
import HomeButtons from "../../Components/Buttons/Primary/HomeButtons";

function MyLists() {
  return (
    <div>
      <Background />
      <Grid item container>
        <Grid item xs={10}>
          <Typography textAlign={"center"}>Mis Listas</Typography>
        </Grid>
        <Grid item xs={10}>
            <HomeButtons/>

        </Grid>
      </Grid>
    </div>
  );
}

export default MyLists;
