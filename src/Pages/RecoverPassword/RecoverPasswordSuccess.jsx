import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BackButton from "../../Components/Buttons/BackButton";
import DoneIcon from '@mui/icons-material/Done';
import { Link } from "react-router-dom";

function RecoverPasswordSuccess() {
    return (
        <>
            <BackButton></BackButton>
            <Grid container rowSpacing={6} justifyContent="center">
                <Grid item xs={10}>
                    <Typography
                        variant="h6"
                        component="h1"
                        sx={{ marginTop: "1em" }}
                    >
                        Olvide mi contraseña
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography paragraph sx={{textAlign:"center"}}>
                        Te enviamos un código de seguridad a tu correo electrónico.
                    </Typography>
                </Grid>
                <Grid item>
                    <DoneIcon color="primary" sx={{fontSize:"128px"}}></DoneIcon>
                </Grid>
                <Grid item xs={10}>
                    <Typography paragraph sx={{textAlign:"center"}}>
                        Tu código de seguridad a sido enviado exitosamente a tu correo electrónico.
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Link to="/login">
                        <Button fullWidth color="primary" variant="contained">Regresar a login</Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default RecoverPasswordSuccess;
