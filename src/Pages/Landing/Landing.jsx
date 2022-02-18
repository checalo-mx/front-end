import Headercontainer from "./Headercontainer";
import Pagecontainer from "./Pagecontainer";
import Footercontainer from "./Footercontainer";
import svg from "../Svg/landing1.svg";
import svg2 from "../Svg/landing2.svg";
import svg3 from "../Svg/landing3.svg";
import { makeStyles } from "@mui/styles";
import landingback from "../Svg/landingback.png";
import LoginIcon from '@mui/icons-material/Login';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';




const useStyles = makeStyles({
  headContainer: {
    background: 'linear-gradient(to bottom, #Fff 25%, #efefef 65%)',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
		backgroundSize: "cover",
		// backgroundAttachment: "fixed",
		Height: "100%",
    color: "#000",
  },
  loginContainer: {
    background: 'linear-gradient(to bottom, #efefef 30%, #eee 90%)',
    color: "#000"
  },
  listContainer: {
    background: 'linear-gradient(to bottom, #eee 10%,  #2DDA93 100%)',
    color: "#000",
  },
  recipesContainer: {
    background: 'linear-gradient(to top, #2E3C48 38%,  #2DDA93 100%)',
    color: "#FFF",
  },
  footerChecalo: {
    background: 'linear-gradient(to bottom, #2E3C48, #7879F1)',
    color: "#FFF",
  }
})

const Landing = () => {
  const classes = useStyles()
  return (
    <>
      {/* Este es el headContainer */}
      <Headercontainer
      titleText="¡Bienvenido a Checalo.mx!"
      containerText="Te ayudamos a resolver la incognita de si un producto va contigo o no. No te quedes con la duda... Mejor, Checalo ;)"
      buttonType="text"
      buttonSize="large"
      buttonColor="primary"
      buttonText="¡Comienza ahora!"
      buttonVariant="contained"
      buttonLink="/signup"
      classes={classes.headContainer}/>
      
      {/* Este es el loginContainer */}
      <Pagecontainer
        containerText="En Checalo comprendemos lo díficil que es encontrar productos que sean compatibles con tú tipo de alimentación y estilo de vida. Es por eso que Checalo nace como la herramienta diseñada especialmente para tí, para ayudarte a encontrar tus productos favoritos."
        buttonType="text"
        buttonColor="primary"
        buttonText="Inicia sesión"
        buttonVariant="contained"
        buttonLink="/login"
        endIcon
        endIcon={<LoginIcon />}
        svg={svg}
        classes={classes.loginContainer}/>

      {/* Este es el listContainer */}
      <Pagecontainer
        titleText="Haz tus propias listas"
        containerText="Crea infinidad de listas con tus productos favoritos lleva a Checalo contigo al súper, haz tú lista de favoritos, lo que sea. ¡Tú creatividad no tiene limites!"
        buttonColor="secondary"
        bgcolor = "text.primary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        buttonType="disabled"
        endIcon={<UpdateIcon />}
        svg={svg2}
        classes={classes.listContainer}/>

      {/* Este es el recipesContainer */}
      <Pagecontainer
        titleText="¡Crea y comparte!"
        containerText="En checalo puedes crear tus propias recetas usando tus productos favoritos, además de poder consultar otras recetas que hagan vayan contigo y tú tipo de alimentción "
        buttonType="contained"
        buttonColor="secondary"
        buttonText="¡Proximamente!"
        buttonVariant="outlined"
        buttonType="disabled"
        endIcon={<UpdateIcon />}
        svg={svg3}
        classes={classes.recipesContainer}/>

      {/* Este es el footerContainer */}
      <Footercontainer
        titleTextFooter="Checalo.MX"
        buttonType="contained"
        buttonColor="secondary"
        buttonText="Ir al inicio"
        buttonVariant="text"
        buttonType="disabled"
        endIcon={<ArrowUpwardIcon />}
        footerText1="Mi cuenta"
        footerText2="Escáner"
        footerText3="Iniciar sesión"
        footerText4="Crear Cuenta"
        footerText5="About us"
        footerText6="Recetas"
        footerText7="Mis listas"
        classes={classes.footerChecalo}
      />
    </>
  );
};

export default Landing;
