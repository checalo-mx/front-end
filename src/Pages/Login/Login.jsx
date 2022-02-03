import React from "react";
import Background from "../../Components/Backgrounds/Background";
import MainCard from "../../Components/Cards/MainCard";
import InputForm from "../../Components/Inputs/InputForm";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import Grid from "@mui/material/Grid";
import CardTitle from "../../Components/Titles/CardTitle";
import { useState } from "react";
import Link from '@mui/material/Link';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("https://checalo-mx-api.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ email, password }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  return (
    <div>
      <Background />
      <MainCard>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={{ xs: 2 }} justifyContent="center">
            <Grid item xc={10}>
              <CardTitle titleText="¡Bienvenido!" />
            </Grid>
            <Grid item xs={10}>
              <InputForm
                label="Correo electrónico"
                value={email}
                onChangeValue={handleChangeEmail}
              />
            </Grid>
            <Grid item xs={10}>
              <InputForm
                label="Contraseña"
                type="password"
                value={password}
                onChangeValue={handleChangePassword}
              />
            </Grid>
            <Grid item xs={10}>
              <PrimaryButton
                buttonText="Iniciar sesión"
                color="secondary"
                type="submit"
                variant="contained"
              />
            </Grid>
            <Grid item xs={10}>
              <p>¿No tienes cuenta? <Link href="/signup" color="primary" underline="none">Registrate</Link></p>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </div>
  );
};

export default Login;
