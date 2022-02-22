import React from "react";
import styles from "./Backgrounds.module.scss";
import logochecalo from "../../Pages/Svg/logochecalo.svg";
import { Grid, Typography } from "@mui/material";

const Background = () => {
  return (
    <div className={styles.fondoVerde}>
      <Grid container justifyContent="center" flexDirection="column" alignItems="center">
        <Grid item marginTop={10}>
          <img src={logochecalo} alt="logo checalo" height="100" width="100" />
        </Grid>
        <Grid item >
        <Typography fontWeight="700" fontSize={25} color={"white"}>
            checalo.mx
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Background;
