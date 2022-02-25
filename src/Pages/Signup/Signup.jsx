import { Grid } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Components/Backgrounds/Background";
import BackButton from "../../Components/Buttons/BackButton";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import CheckboxGroup from "../../Components/CheckboxGroup/CheckboxGroup";
import Dropdown from "../../Components/Dropdown/Dropdown";
import InputForm from "../../Components/Inputs/InputForm";
import CardTitle from "../../Components/Titles/CardTitle";
import { UserContext } from "../../Context/UserContext";


const Signup = () => {
    const [allergies, setAllergies] = useState([]);
    const [diets, setDiets] = useState([]);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [diet, setDiet] = useState("");
    const [userAllergies, setUserAllergies] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.logged) {
            navigate("/home");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://checalo-mx-api.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify({
                name,
                lastName,
                email,
                password,
                typeOfDiet: diet,
                allergies: userAllergies,
            }), // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Success:", response);
                if (response.ok) {
                    navigate("/login");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        fetch("https://checalo-mx-api.herokuapp.com/signup").then((result) =>
            result.json().then((data) => {
                setAllergies(data.allergies);
                setDiets(data.namesOfDiet);
                setUserAllergies(
                    data.allergies.reduce(
                        (accum, current) => ({ ...accum, [current]: false }),
                        {}
                    )
                );
            })
        );
    }, []);

    const handleChangeName = (value) => {
        setName(value);
    };

    const handleLastName = (value) => {
        setLastName(value);
    };

    const handleEmail = (value) => {
        setEmail(value);
    };

    const handlePassword = (value) => {
        setPassword(value);
    };
    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);
    };

    const handleDiet = (value) => {
        setDiet(value);
    };

    const handleUserAllergies = (event) => {
        setUserAllergies({
            ...userAllergies,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div>
            <Background />
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={{ xs: 2 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={10} marginTop={2}>
                        <CardTitle titleText="Únete a checalo.mx" />
                        <p style={{marginTop: "10px"}}>¡Ya casi estás!</p>
                    </Grid>
                    <Grid item xs={10}>
                        <InputForm
                            label="Nombre"
                            type="text"
                            required={true}
                            value={name}
                            onChangeValue={handleChangeName}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <InputForm
                            label="Apellido"
                            type="text"
                            required={true}
                            value={lastName}
                            onChangeValue={handleLastName}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <InputForm
                            label="Email"
                            type="text"
                            required={true}
                            value={email}
                            onChangeValue={handleEmail}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <InputForm
                            label="Contraseña"
                            type="password"
                            required={true}
                            value={password}
                            onChangeValue={handlePassword}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <InputForm
                            label="Confirmar contraseña"
                            type="password"
                            required={true}
                            value={confirmPassword}
                            onChangeValue={handleConfirmPassword}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Dropdown
                            label="Tipo de dieta"
                            arrayOptions={diets}
                            value={diet}
                            onChangeValue={handleDiet}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <CheckboxGroup
                            label="Alergias"
                            arrayOptions={allergies}
                            value={userAllergies}
                            onChangeValue={handleUserAllergies}
                            state={userAllergies}
                        />
                    </Grid>
                    <Grid item xs={10} marginBottom={5}>
                        <Grid
                            container
                            spacing={{ xs: 2 }}
                            justifyContent="center"
                        >
                            <Grid item xs={10}>
                                <Grid
                                    container
                                    spacing={{ xs: 2 }}
                                    justifyContent="center"
                                >
                                    <Grid item>
                                        <PrimaryButton
                                            buttonText="REGISTRATE"
                                            color="primary"
                                            type="submit"
                                            variant="contained"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Signup;
