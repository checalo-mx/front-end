import Pagecontainer from "./Pagecontainer";
import svg from "../Svg/landing1.svg"
import svg2 from "../Svg/landing2.svg"
import svg3 from "../Svg/landing3.svg"
import { makeStyles } from "@mui/styles";
import landingback from "../Svg/landingback.png"

const useStyles = makeStyles({
  greenContainer: {
    backgroundColor: "#2DDA93",
    color: "#FFF",
  },
  blueContainer: {
    backgroundColor: "#2E3C48",
    color: "#FFF",
  },
  firstContainer: {
    backgroundImage: `url(${landingback})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		Height: "100%",
    color: "#FFF",
  },
  footerChecale: {
    background: 'linear-gradient(to bottom, #2E3C48, #7879F1)',
    color: "#FFF",  
  }
})

const Landing = () => {

  const classes = useStyles()

  return (
    <>
      <Pagecontainer  
      containerText="Te ayudamos a resolver la incognita de si un producto va contigo o no. No te quedes con la duda... Mejor, Checalo ;)"
      buttonType="text"
      buttonColor="primary"
      buttonText="¡Comienza ahora!"
      buttonVariant="contained"
      svg={svg}
      buttonLink="/login"
      classes={classes.firstContainer}
      />
      <Pagecontainer
        titleText="¡Bienvenido a Checalo.mx!"
        containerText="En Checalo comprendemos lo díficil que es encontrar productos que sean compatibles con tú tipo de alimentación y estilo de vida. Es por eso que Checalo nace como la herramienta diseñada especialmente para tí, para ayudarte a encontrar tus productos favoritos."
        buttonType="text"
        buttonColor="primary"
        buttonText="¡Comienza ahora!"
        buttonVariant="contained"
        buttonLink="/login"
        svg={svg}
      />
      <Pagecontainer
        titleText="Haz tus propias listas"
        containerText="Crea infinidad de listas con tus productos favoritos lleva a Checalo contigo al súper, haz tú lista de favoritos, lo que sea. 
¡Tú creatividad no tiene limites!"
        buttonType="contained"
        buttonColor="secondary"
        bgcolor = "text.primary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        // disabled
        svg={svg2}
        classes={classes.greenContainer}

      />
      <Pagecontainer
        titleText="¡Crea y comparte!"
        containerText="En checalo puedes crear tus propias recetas usando tus productos favoritos, además de poder consultar otras recetas que hagan vayan contigo y tú tipo de alimentción "
        buttonType="contained"
        buttonColor="primary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        // disabled
        svg={svg3}
        classes={classes.blueContainer}
      />
      <Pagecontainer
        titleTextFooter="Checalo.MX"
        containerLink="Volver arriba"
        containerText1="Mis listas"
        containerText2="Mi Cuenta"
        containerText3="Listas"
        containerText4="Escaner"
        containerText5="Crear cuenta"
        containerText6="Busqueda manual"
        containerText7="About us"
        containerText8="Escaner"
        classes={classes.footerChecale}
      />
    </>
  );
};

export default Landing;
