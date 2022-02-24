import {
    Button,
    Card,
    CardContent,
    Container,
    FormGroup,
    FormLabel,
    Grid,
    Switch,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Components/Backgrounds/Background";
import { UserContext } from "../../Context/UserContext";
import { SnackCtx } from "../../Context/Snackcontext";
import { handleUserTypeOfDiet, handleUserAllergies, handleSubmit, getUserInfo } from "./functions";
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";

function FeedingUser () {
    const [userInfo, setUserInfo] = useState({allergies: [{}]});
    const { openSnackbar } = useContext(SnackCtx);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        getUserInfo(user, setUserInfo, openSnackbar);
    }, [])

    return (
        <>
            <Background></Background>
            <Container>
                <Typography
                    component="h1"
                    color="white"
                    fontSize="2em"
                    position="absolute"
                    top="25vh"
                    fontWeight="bold"
                >{`¡BIENVENIDO ${userInfo.name || ""}!`}</Typography>
                <Box component="form" marginBottom={10}>
                    <Typography component="h2" variant="h5">
                        Perfil de alimentación
                    </Typography>
                    <Typography component="small">
                        Selecciona el perfil de alimentación que mejor vaya
                        contigo.{" "}
                    </Typography>
                    <Typography component="h3" marginTop={2}>
                        Tipo de dieta
                    </Typography>
                    <Card variant="outlined">
                        <CardContent>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <FormLabel>Vegetariano</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" onChange={e => handleUserTypeOfDiet(e, userInfo, setUserInfo)} name="Vegetariano" checked={ "Vegetariano" === userInfo.typeOfDiet || false } />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Vegano</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" onChange={e => handleUserTypeOfDiet(e, userInfo, setUserInfo)} name="Vegano" checked={ "Vegano" === userInfo.typeOfDiet || false } />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Typography component="h3" marginTop={2}>
                        Alergias
                    </Typography>
                    <Card variant="outlined">
                        <CardContent>
                            <FormGroup>
                                {Object.keys(userInfo.allergies[0]).map( allergy => (
                                    <Grid item container key={allergy}>
                                        <Grid item xs={10}>
                                            <FormLabel>{allergy.charAt(0).toUpperCase() + allergy.slice(1).toLowerCase()}</FormLabel>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Switch name={allergy} onChange={e => handleUserAllergies(e, userInfo, setUserInfo)} checked={userInfo.allergies[0][allergy] || false} color="primary" />
                                        </Grid>
                                    </Grid>
                                    )
                                )}
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Box textAlign="center" marginTop={4}>
                        <Button onClick={e => handleSubmit(e, userInfo, user, openSnackbar, navigate)} type="submit" color="secondary" variant="contained">Guardar</Button>
                    </Box>
                </Box>
            </Container>
            <FixedBottomNavbar/>
        </>
    );
}

export default FeedingUser;
