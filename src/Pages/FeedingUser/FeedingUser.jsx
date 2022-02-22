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

function FeedingUser() {
    const { openSnackbar } = useContext(SnackCtx);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

    const [userInfo, setUserInfo] = useState({ allergies: [{}] });

    useEffect(() => {
        fetch("https://checalo-mx-api.herokuapp.com/users/info", {
            headers: {
                token: user.token,
            },
        })
            .then((result) => result.json())
            .then((data) => setUserInfo(data.payload))
            .catch((err) =>
                openSnackbar(
                    "¡Opps! Tenemos problemas, intenta más tarde",
                    "error"
                )
            );
    }, []);

    console.log(userInfo);

    const handleUserTypeOfDiet = (e) => {
        if (e.target.name !== userInfo.typeOfDiet) {
            setUserInfo({ ...userInfo, typeOfDiet: e.target.name });
        }
    };

    const handleUserAllergies = (e) => {
        setUserInfo({
            ...userInfo,
            allergies: [
                { ...userInfo.allergies[0], [e.target.name]: e.target.checked },
            ],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://checalo-mx-api.herokuapp.com/users", {
            method: "PATCH",
            body: JSON.stringify(userInfo),
            headers: {
                token: user.token,
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((data) => {
                if (data.ok) {
                    openSnackbar(
                        "Tu información de alimentación ha sido actualizada.",
                        "success"
                    );
                    navigate("/home");
                } else {
                    openSnackbar(
                        "No pudimos actualizar tu información, intenta más tarce",
                        "error"
                    );
                }
            })
            .catch((err) =>
                openSnackbar(
                    "¡Opps! Tenemos problemas, intenta más tarde",
                    "error"
                )
            );
    };

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
                <Box component="form">
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
                                        <Switch
                                            color="primary"
                                            onChange={handleUserTypeOfDiet}
                                            name="Vegetariano"
                                            checked={
                                                "Vegetariano" ===
                                                    userInfo.typeOfDiet || false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormLabel>Vegano</FormLabel>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Switch
                                            color="primary"
                                            onChange={handleUserTypeOfDiet}
                                            name="Vegano"
                                            checked={
                                                "Vegano" ===
                                                    userInfo.typeOfDiet || false
                                            }
                                        />
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
                                {Object.keys(userInfo.allergies[0]).map(
                                    (allergy) => (
                                        <Grid item container key={allergy}>
                                            <Grid item xs={10}>
                                                <FormLabel>
                                                    {allergy
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        allergy
                                                            .slice(1)
                                                            .toLowerCase()}
                                                </FormLabel>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Switch
                                                    name={allergy}
                                                    onChange={
                                                        handleUserAllergies
                                                    }
                                                    checked={
                                                        userInfo.allergies[0][
                                                            allergy
                                                        ] || false
                                                    }
                                                    color="primary"
                                                />
                                            </Grid>
                                        </Grid>
                                    )
                                )}
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Box textAlign="center">
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            color="secondary"
                            variant="contained"
                            sx={{ marginTop: "40px", marginBottom: "40px" }}
                        >
                            Guardar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default FeedingUser;
