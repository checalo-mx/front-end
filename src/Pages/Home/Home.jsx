import React from 'react';
import Menubutton from '../../Components/Buttons/MenuButton/Menubutton';
import Background from '../../Components/Backgrounds/Background';
import Grid from "@mui/material/Grid";
import CardTitle from '../../Components/Titles/CardTitle';
import PrimaryButton from '../../Components/Buttons/Primary/PrimaryButton'



const Home = () => {
  return <div>
      <Background
       />
       <Grid container spacing ={{xs:2}} justifyContent="center">
       <Grid item xs={10}>
          <CardTitle
            titleText="Hola"
          />
        </Grid>
        <Grid item xs={10}>
            ¡Comienza aquí!
        </Grid>
        <Grid item xs={10}>
        <CardTitle
            titleText="Elige una opción"
          />
        </Grid>
        <Grid item xs={10}>
        <PrimaryButton
                buttonText="Mis Escaneos"
                color="secondary"
                type="submit"
                variant="contained"
              />
        </Grid>
        <Grid item xs={10}>
        <PrimaryButton
                buttonText="Mi Perfil"
                color="secondary"
                type="submit"
                variant="contained"
              />
        </Grid>
        <Grid item xs={10}>
        <PrimaryButton
                buttonText="Mis recetas"
                color="secondary"
                type="submit"
                variant="contained"
              />
        </Grid>
        <Grid item xs={10}>
        <PrimaryButton
                buttonText="Mis Listas"
                color="secondary"
                type="submit"
                variant="contained"
              />
        </Grid>
        <Grid item xs={10}></Grid>
       </Grid>
     
  </div>;
};

export default Home;


