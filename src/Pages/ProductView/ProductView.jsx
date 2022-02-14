import { Grid } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import OutlinedCard from "../../Components/Cards/OutlinedCard";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { makeStyles } from "@mui/styles";
import Background from "../../Components/Backgrounds/Background";
import { useParams, Link } from "react-router-dom";
import { SnackCtx } from "../../Context/Snackcontext";
import Thinking from "../Svg/thinking.svg";
import { UserContext } from "../../Context/UserContext";

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
    const { user } = useContext(UserContext);

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
    console.log("Holis", product);

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
                                <Typography align="center" component="p">
                                    Alergias con base en tu alimentación{" "}
                                    {product.allergiesMatch ? product.allergiesMatch.join(" ") : ""}
                                </Typography>
                            </OutlinedCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} marginTop={3}>
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
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductView;
