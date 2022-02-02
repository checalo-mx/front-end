import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import CardTitle from "../../Components/Titles/CardTitle";
import Pagecontainer from "./Pagecontainer";
import svg from "../Svg/landing1.svg"
import svg2 from "../Svg/landing2.svg"
import svg3 from "../Svg/landing3.svg"

const Landing = () => {
  return (
    <>
      <Pagecontainer
      containerText="Te ayudamos a resolver la incognita de si un producto va contigo o no. No te quedes con la duda... Mejor, Checalo ;)"
      buttonType="text"
      buttonColor="primary"
      buttonText="¡Comienza ahora!"
      buttonVariant="contained"
      svg={svg}
      />
      <Pagecontainer
        titleText="¡Bienvenido a Checalo.mx!"
        containerText="En Checalo comprendemos lo díficil que es encontrar productos que sean compatibles con tú tipo de alimentación y estilo de vida. Es por eso que Checalo nace como la herramienta diseñada especialmente para tí, para ayudarte a encontrar tus productos favoritos."
        buttonType="text"
        buttonColor="primary"
        buttonText="¡Comienza ahora!"
        buttonVariant="contained"
        svg={svg}
      />
      <Pagecontainer
        titleText="Haz tus propias listas"
        containerText="Crea infinidad de listas con tus productos favoritos lleva a Checalo contigo al súper, haz tú lista de favoritos, lo que sea. 
¡Tú creatividad no tiene limites!"
        buttonType="text"
        buttonColor="primary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        disabled
        svg={svg2}
      />
      <Pagecontainer
        titleText="¡Crea y comparte recetas!"
        containerText="En checalo puedes crear tus propias recetas usando tus productos favoritos, además de poder consultar otras recetas que hagan vayan contigo y tú tipo de alimentción "
        buttonType="text"
        buttonColor="primary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        disabled
        svg={svg3}
      />
    </>
  );
};

export default Landing;
