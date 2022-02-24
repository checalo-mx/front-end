import React from "react";
import { Grid, FormGroup } from "@mui/material";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { SnackCtx } from "../../Context/Snackcontext";
import { useEffect, useContext, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';

const ChangePassword = () => {
    const { user, setUser } = useContext(UserContext);
    const { openSnackbar, closeSnackbar } = useContext(SnackCtx);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

    const handlePassword = (value) => {
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://checalo-mx-api.herokuapp.com/users/password", {
            method: "PATCH",
            body: JSON.stringify({ password }),
            headers: {
                token: user.token,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.ok) {
                    openSnackbar("Contraseña actualizada", "success");
                    console.log(response);
                    setUser({ logged: false });
                    navigate("/");
                } else {
                    openSnackbar(
                        "No pudimos actualizar tu contraseña",
                        "error"
                    );
                }
            })
            .catch((error) => {
                openSnackbar("Algo salió mal, intenta nuevamente", "error");
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <Background />
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    marginTop={5}
                    marginBottom={7}
                >
                    <Grid item xs={10}>
                        <CardTitle titleText="Cambio de contraseña" />
                    </Grid>
                </Grid>
                <FormGroup>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item xs={10}>
                            <InputForm
                                label="Nueva contraseña"
                                required={true}
                                onChangeValue={handlePassword}
                                value={password}
                                type="password"
                            />
                        </Grid>

                        <Grid item xs={10}>
                            <InputForm
                                label="Repite la contraseña"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
                <Grid item>
                    <Grid
                        container
                        xs={{ xs: 2 }}
                        justifyContent="center"
                        marginTop={5}
                        marginBottom={3}
                    >
                        <Grid item>
                            <PrimaryButton
                                buttonText="Guardar"
                                color="primary"
                                type="submit"
                                variant="contained"
                                size="medium"
                                endIcon={<SaveIcon/>}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ChangePassword;
