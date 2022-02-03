import { useState } from "react";
import Grid from "@mui/material/Grid";
import InputForm from "../../Components/Inputs/InputForm";
import BackButton from "../../Components/Buttons/BackButton";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import { Typography } from "@mui/material";

function RecoverPassword () {
    const [email, setEmail] = useState("");

    const handleEmail = (value) => {
        setEmail(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <BackButton></BackButton>
            <Grid container rowSpacing={10} justifyContent="center">
                <Grid item xs={10}>
                    <Typography variant="h6" component="h1" sx={{marginTop:"1em"}} >Olvide mi contraseña</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography paragraph sx={{textAlign:"center"}}>
                        Te enviaremos un código de seguridad a tu correo electrónico
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <form onSubmit={handleSubmit}>
                        <Grid container rowSpacing={12}>
                            <Grid item xs={12}>
                                <InputForm label="Email" type="email" value={email} onChangeValue={handleEmail}></InputForm>
                            </Grid>
                            <Grid item xs={12}>
                                <PrimaryButton buttonText="Enviar mi código" color="primary" type="submit" variant="contained"></PrimaryButton>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default RecoverPassword;