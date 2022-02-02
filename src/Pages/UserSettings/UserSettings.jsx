import { Grid, Container } from "@mui/material";
import React from "react";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import LockIcon from "@mui/icons-material/Lock";
import { grid } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

const UserSettings = () => {
    return (
        <div>
            <Background />

            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item xs={10}>
                    <InputForm label="Nombre" />
                </Grid>

                <Grid item xs={10}>
                    <InputForm label="Apellido" />
                </Grid>

                <Grid item xs={10}>
                    <InputForm label="Correo Electrónico" />
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center" marginTop={7} marginBottom={7}>
                <Grid item xs={10}>
                    <CardTitle titleText="Información de perfil" />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" rowSpacing={4}>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Cambiar contaseña</Grid>
                        <Grid item>
                            <LockIcon>Lock</LockIcon>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Configuración de alimentación</Grid>
                        <Grid item>
                            <SettingsIcon />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Eliminar cuenta</Grid>
                        <Grid item>
                            <DeleteIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserSettings;
