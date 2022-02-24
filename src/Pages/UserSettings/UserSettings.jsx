import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Background from "../../Components/Backgrounds/Background";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import { HomeTwoTone, Edit, Cancel, Save } from "@mui/icons-material";
import { SnackCtx } from "../../Context/Snackcontext";
import { UserContext } from "../../Context/UserContext";
import { ModalCtx } from "../../Context/ModalContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";
import Navbar from "../../Components/Navbar/Navbar";

const UserSettings = () => {
    const { openModal, closeModal, confirm } = useContext(ModalCtx);
    const { openSnackbar } = useContext(SnackCtx);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

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
                        setUser({ logged: false });
                        openSnackbar("Tu cuenta ha sido eliminada", "success");
                        closeModal();
                        navigate("/");
                    })
                )
                .catch((error) => {
                    openSnackbar("Algo salió mal, intenta nuevamente", "error");
                });
        }
    }, [confirm]);

    const [userInfo, setUserInfo] = useState({});
    const [edit, setEdit] = useState(true);

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

    const handleEdit = () => setEdit(!edit);

    const handleName = (value) => setUserInfo({ ...userInfo, name: value });
    const handleLastName = (value) =>
        setUserInfo({ ...userInfo, lastName: value });
    const handleEmail = (value) => setUserInfo({ ...userInfo, email: value });

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
                        "Tu información de perfil ha sido actualizada.",
                        "success"
                    );
                    handleEdit();
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

    const HomeLink = {
        buttonText: "Home",
        startIcon: <HomeTwoTone />,
        component: Link,
        to: "/Home",
    };
    const SaveButton = {
        buttonText: "Guardar",
        startIcon: <Save />,
        onClick: handleSubmit,
    };

    console.log("holis", user);

    return (
        <div>
            <Navbar />
            <Background />
            <Grid
                container
                rowSpacing={{ xs: 4 }}
                justifyContent="center"
                sx={{ marginTop: "0!important" }}
            >
                <Grid item xs={10}>
                    <InputForm
                        variant="standard"
                        onChangeValue={handleName}
                        disabled={edit}
                        label="Nombre"
                        value={userInfo.name || ""}
                    />
                </Grid>
                <Grid item xs={10}>
                    <InputForm
                        variant="standard"
                        onChangeValue={handleLastName}
                        disabled={edit}
                        label="Apellido"
                        value={userInfo.lastName || ""}
                    />
                </Grid>
                <Grid item xs={10}>
                    <InputForm
                        variant="standard"
                        onChangeValue={handleEmail}
                        disabled={edit}
                        label="Correo Electrónico"
                        value={userInfo.email || ""}
                    />
                </Grid>
                <Grid item xs={10} container columnSpacing={2}>
                    <Grid item xs={6}>
                        <PrimaryButton
                            fullWidth
                            buttonText={edit ? "Editar" : "Cancelar"}
                            onClick={handleEdit}
                            variant="contained"
                            startIcon={edit ? <Edit /> : <Cancel />}
                            color={edit ? "warning" : "primary"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <PrimaryButton
                            fullWidth
                            {...(edit ? HomeLink : SaveButton)}
                            variant="outlined"
                            sx={{
                                height: "100%",
                                "& .MuiSvgIcon-root": { fontSize: "24px" },
                            }}
                        />
                    </Grid>
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
            <Grid
                container
                justifyContent="center"
                rowSpacing={4}
                marginBottom={10}
            >
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Cambiar contaseña</Grid>
                        <Grid item onClick={() => navigate("/changepassword")}>
                            <LockIcon>Lock</LockIcon>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container justifyContent="space-between">
                        <Grid item>Configuración de alimentación</Grid>
                        <Grid item onClick={() => navigate("/feedinguser")}>
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
            <FixedBottomNavbar />
        </div>
    );
};
export default UserSettings;
