import React from "react";
import { Grid } from "@mui/material";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";


const ChangePassword = () => {
    return (
        <div>
            <Background />
            <Grid
                container
                spacing={2}
                justifyContent="center"
                marginTop={5}
                marginBottom={7}
            >
                <Grid item xs={10}>
                    <CardTitle titleText="Cambio de contraseña" />
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item xs={10}>
                    <InputForm label="Contraseña Actual" />
                </Grid>

                <Grid item xs={10}>
                    <InputForm label="Nueva contraseña" />
                </Grid>

                <Grid item xs={10}>
                    <InputForm label="Repite la contraseña" />
                </Grid>
            </Grid>
            <Grid item>
              <Grid container xs={{ xs:2 }} justifyContent="center" marginTop={5} marginBottom={3}>
                <Grid item >
                <PrimaryButton
                buttonText="Iniciar sesión"
                color="primary"
                type="submit"
                variant="contained"
                size="medium"
              />
                </Grid>
              </Grid>
             
            </Grid>
        </div>
    );
};

export default ChangePassword;
