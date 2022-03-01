import { Grid } from "@mui/material";
import React from "react";
import Background from "../../Components/Backgrounds/Background";
import CardAlimentacion from "../../Components/Cards/CardAlimentacion"
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";

const Configuracionalimentacion = () => {
    return (
        <div>
            <Background />
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
             <CardAlimentacion>
                <Grid item xs={10}>
                    Configuracion de alimentacion
                </Grid>
                
                </CardAlimentacion>


            </Grid>
            <FixedBottomNavbar/>
        </div>

           )  };

    
export default Configuracionalimentacion;