import React from "react";
import HomeButtons from "../../Components/Buttons/Primary/HomeButtons";
import Escanersvg from "../../Pages/Svg/scanlogo.svg";
import Background from "../../Components/Backgrounds/Background";
import Profilelogo from "../../Pages/Svg/profilelogo.svg"
import Listlogo from "../../Pages/Svg/listlogo.svg"
import Recipeslogo from "../../Pages/Svg/recipeslogo.svg"

const Home = () => {
  return (
    <div>
      <Background />
      <HomeButtons
        svg={Escanersvg}
        buttonTitle="Escaner"
        buttonSubTitle="Aquí puedes escanear."
      />
      <HomeButtons
        svg={Profilelogo}
        buttonTitle="Mi Perfil"
        buttonSubTitle="Cambia tus preferencias"
      />
      <HomeButtons
        svg={Listlogo}
        buttonTitle="Mis listas"
        buttonSubTitle="Crea listas de productos"
      />
      <HomeButtons
        svg={Recipeslogo}
        buttonTitle="Recetas"
        buttonSubTitle="Crea Recetas"
      />

    </div>
  );
};

export default Home;
