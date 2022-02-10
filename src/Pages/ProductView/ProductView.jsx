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

    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((result) =>
                result.json().then((data) => {
                    setProduct({
                        title: "Escaneaste:",
                        supportText: "Aquí conocerás más de este producto:",
                        name: data?.product?.product_name,
                        image: data?.product?.image_front_url,
                        qty: data?.product?.quantity,
                        traces: data?.product?.traces_from_ingredients,
                    });
                    if (data.status === 0) {
                        openSnackbar(
                            "Producto no encontrado,  intenta con otro producto",
                            "warning"
                        );
                        setProduct({
                            title: "",
                            supportText: "No pudimos encontrar tu producto :( intenta nuevamente",
                            name: "Oops!",
                            qty: "",
                            image: Thinking,
                        });
                    }
                })
            )
            .catch((error) => {
                openSnackbar("Algo salió mal, intenta nuevamente", "error");
            });
    }, []);
    console.log(product);

    const classes = useStyles();
    return (
        <div>
            <Background />
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item xs={10}>
                            <Typography align="center" variant="h4">
                                {product.title} {product.name + product.qty}
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
                                <img alt="#" src={product.image} />
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
