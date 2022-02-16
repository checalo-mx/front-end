import React from "react";
import styles from "./Backgrounds.module.scss";
import logochecalo from "../../Pages/Svg/logochecalo.svg";
import {Grid} from "@mui/material";

const Background = () => {
  
  return (
    <div className={styles.fondoVerde}>
     <Grid
      container
      justifyContent="center"
      alignItems="center">  
        <Grid item marginTop={3} >                      
        <img src={logochecalo} alt="logo checalo" height="100" width="100"  />
        </Grid> 
      </Grid>
                        
    </div>
  );
};

export default Background;
