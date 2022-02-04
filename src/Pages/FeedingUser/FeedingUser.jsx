import { Button, Card, CardContent, Container, FormGroup, FormLabel, Grid, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Background from "../../Components/Backgrounds/Background";

function FeedingUser () {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "CESAR JAVIER",
        lastName: "HERNNDEZ BAUTISTA",
        typeOfDiet: "Vegetariano",
        active: true,
        allergies: [
            {
                "huevo": false,
                "lacteos": true,
                "nueces": false,
                "gluten": true,
                "mariscos": false
            }
        ],
        email: "cesar@checale.mx",
    });

    return (
        <>
            <Background></Background>
            <Container>
                <Typography component="h1" color="white" fontSize="2em" position="absolute" top="25vh" fontWeight="bold">{ `¡BIENVENIDO ${user.name}!` }</Typography>
                <Box component="form">
                    <Typography component="h2" variant="h5" >Perfil de alimentación</Typography>
                    <Typography component="small">Selecciona el perfil de alimentación que mejor vaya contigo. </Typography>
                    <Typography component="h3" marginTop={2}>Tipo de dieta</Typography>
                    <Card variant="outlined">
                        <CardContent>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <FormLabel>Vegetariano</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Vegano</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Typography component="h3" marginTop={2}>Alergias</Typography>
                    <Card variant="outlined">
                        <CardContent>
                            <FormGroup>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <FormLabel>Huevo</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Lacteos</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Nueces</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Gluten</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Mariscos</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch color="primary" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Box textAlign="center">
                        <Button type="submit" color="secondary" variant="contained" sx={{ my: "2em"}} >Guardar</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default FeedingUser;