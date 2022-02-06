import { Grid } from "@mui/material";
import React from "react";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from '@mui/material/Box';
import OutlinedCard from '../../Components/Cards/OutlinedCard';
import Switchs from "../../Components/Switchs/Switchs";
import Typography from '@mui/material/Typography';
import CardAlimentacion from "../../Components/Cards/CardAlimentacion"

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

        </div>

           )  };

    
export default Configuracionalimentacion;