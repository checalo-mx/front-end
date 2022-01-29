import React from "react";
import Background from "../Backgrounds/Background";
import MainCard from "../Cards/MainCard";
import InputForm from "../Inputs/InputForm";
import styles from "./Login.module.scss";
import PrimaryButton from "../Buttons/Primary/PrimaryButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Login = (props) => {
  return (
    <div>
      <Background />
      <MainCard>
        <Grid container spacing={{ xs: 2 }} justifyContent="center">
          <Grid item xs={10}>
              <InputForm label="Correo electrónico" />
          </Grid>
          <Grid item xs={10}>
            <InputForm label="Contraseña" type="password" />
          </Grid>
          <Grid item xs={10}>
            <PrimaryButton children="Iniciar sesión" color="secondary" />
          </Grid>
        </Grid>
      </MainCard>
    </div>
  );
};

export default Login;
