import { Grid } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import OutlinedCard from "../../Components/Cards/OutlinedCard";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { makeStyles } from "@mui/styles";
import Background from "../../Components/Backgrounds/Background";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SnackCtx } from "../../Context/Snackcontext";
import Thinking from "../Svg/thinking.svg";
import { UserContext } from "../../Context/UserContext";
import AlertMessage from "../../Components/Alerts/AlertMessage";

const useStyles = makeStyles({
    productViewButton: {
        width: "140px",
        height: "25px",
    },
});

const ProductView = (props) => {
    const { barcode } = useParams();
    const [product, setProduct] = useState({});
    const { openSnackbar, closeSnackbar } = useContext(SnackCtx);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        fetch(`https://checalo-mx-api.herokuapp.com/users/${barcode}`, {
            headers: {
                token: user.token,
            },
        })
            .then((result) =>
                result.json().then((data) => {
                    setProduct(data.payload);
                })
            )
            .catch((error) => {
                openSnackbar("Algo salió mal, intenta nuevamente", "error");
            });
    }, []);

    const classes = useStyles();
    return (
        <div>
            <Background />
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item xs={10}>
                            <Typography align="center" variant="h4">
                                {product.title +
                                    (product.name || "") +
                                    (product.qty || "")}
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography align="center">
                                {product.supportText}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item>
                            <OutlinedCard>
                                <img
                                    alt="#"
                                    src={product.image || Thinking}
                                    height="240px"
                                />
                                <AlertMessage
                                    severity={product?.allergiesAlert?.severity || ""}
                                    alertTitle={product?.allergiesAlert?.alertTitle || ""}
                                    alertText={product?.allergiesAlert?.alertText || ""}
                                />
                                <AlertMessage
                                    severity={product?.dietAlert?.severity || ""}
                                    alertTitle={product?.dietAlert?.alertTitle || ""}
                                    alertText={product?.dietAlert?.alertText || ""}
                                />
                            </OutlinedCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} marginTop={3} marginBottom={5}>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item>
                            <PrimaryButton
                                buttonText="Escanear"
                                color="secondary"
                                variant="contained"
                                startIcon={<QrCodeScannerOutlinedIcon />}
                                classes={classes.productViewButton}
                                to="/scanner"
                                component={Link}
                                variant="contained"
                                style={{ width: 145, height: 40 }}
                            />
                        </Grid>
                        <Grid item>
                            <PrimaryButton
                                buttonText="Home"
                                color="primary"
                                variant="contained"
                                startIcon={<HomeTwoToneIcon />}
                                classes={classes.productViewButton}
                                to="/home"
                                component={Link}
                                variant="contained"
                                style={{ width: 145, height: 40 }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductView;
