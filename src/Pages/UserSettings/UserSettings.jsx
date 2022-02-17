import { Grid } from "@mui/material";
import React, {useEffect} from "react";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import { SnackCtx } from "../../Context/Snackcontext";
import { UserContext } from "../../Context/UserContext";
import { ModalCtx } from "../../Context/ModalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const UserSettings = () => {
    const { openModal, closeModal, confirm } = useContext(ModalCtx);
    const { openSnackbar, closeSnackbar } = useContext(SnackCtx);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (confirm) {
            fetch(`https://checalo-mx-api.herokuapp.com/users/`, {
                method: "DELETE",
                headers: {
                    token: user.token,
                },
            })
                .then((result) =>
                    result.json().then((data) => {
                        openSnackbar("Tu cuenta ha sido eliminada", "success");
                        closeModal()
                        setUser({logged: false})
                        navigate("/");
                    })
                )
                .catch((error) => {
                    openSnackbar("Algo salió mal, intenta nuevamente", "error");
                });
        }
    }, [confirm]);
    return (
        <div>
            <Background />
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item xs={10}>
                    <InputForm label="Nombre" />
                </Grid>
                <Grid item xs={10}>
                    <InputForm label="Apellido" />
                </Grid>
                <Grid item xs={10}>
                    <InputForm label="Correo Electrónico" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                marginTop={7}
                marginBottom={7}
            >
                <Grid item xs={10}>
                    <CardTitle titleText="Información de perfil" />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" rowSpacing={4}>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Cambiar contaseña</Grid>
                        <Grid item>
                            <LockIcon>Lock</LockIcon>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Configuración de alimentación</Grid>
                        <Grid item>
                            <SettingsIcon />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid
                        container
                        justifyContent="space-between"
                        onClick={() =>
                            openModal(
                                "Estás a punto de eliminar tu cuenta",
                                "Esto borrará tus listas de búsquedas dentro de chécalo.mx",
                                "No te preocupes, siempre podrás volver.¡Te vamos a extrañar!",
                                "error",
                                "Aceptar",
                                "secondary",
                                "Cancelar"
                            )
                        }
                    >
                        <Grid item>Eliminar cuenta</Grid>
                        <Grid item>
                            <DeleteIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
export default UserSettings;