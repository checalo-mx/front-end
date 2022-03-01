import React, { useEffect } from "react";
import HomeButtons from "../../Components/Buttons/Primary/HomeButtons";
import Escanersvg from "../../Pages/Svg/scanlogo.svg";
import Background from "../../Components/Backgrounds/Background";
import Profilelogo from "../../Pages/Svg/profilelogo.svg";
import Listlogo from "../../Pages/Svg/listlogo.svg";
import Recipeslogo from "../../Pages/Svg/recipeslogo.svg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Grid } from "@mui/material";
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";
import Navbar from "../../Components/Navbar/Navbar";

const endPoint = process.env.REACT_APP_END_POINT_URL;

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.logged === false) {
      navigate("/login");
    }
  }, []);

  const [listId, setListId] = useState("");

  useEffect(() => {
    fetch(`${endPoint}/list`, {
      method: "GET",
      headers: {
        token: user.token,
      },
    }).then((result) =>
      result.json().then((data) => {
       setListId(data.lists[0]["_id"]);
      })
    );
  }, []);

  console.log("Veamos el valor", listId);

  return (
    <div>
      <Navbar />
      <Background />
      <Grid
        container
        justifyContent="center"
        flexDirection="column"
        marginBottom={10}
      >
        <Grid item marginTop={2} marginBottom={2}>
          <HomeButtons
            svg={Escanersvg}
            buttonTitle="Escaner"
            buttonSubTitle="Aquí puedes escanear tus productos."
            address="/scanner"
          />
        </Grid>
        <Grid item marginTop={2} marginBottom={2}>
          <HomeButtons
            svg={Profilelogo}
            buttonTitle="Mi Perfil"
            buttonSubTitle="Modifica preferencias de alimentación."
            address="/usersettings"
          />
        </Grid>
        <Grid item marginTop={2} marginBottom={2}>
          <HomeButtons
            svg={Listlogo}
            buttonTitle="Historial"
            buttonSubTitle="Consulta tu historial de escaneos"
            address={`/mylists/${listId}`}
          />
        </Grid>
        <Grid item marginTop={2}>
          <HomeButtons
            svg={Recipeslogo}
            buttonTitle="Recetas"
            buttonSubTitle="Crea Recetas"
          />
        </Grid>
      </Grid>
      <FixedBottomNavbar />
    </div>
  );
};

export default Home;
