import { Grid } from "@mui/material";
import React from "react";
import MainCard from "../../Components/Cards/MainCard";
import CardTitle from "../../Components/Titles/CardTitle";
import OutlinedCard from "../../Components/Cards/OutlinedCard";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import { makeStyles } from "@mui/styles";

const useStyles= makeStyles({
    productViewButton: {
        width: "140px",
        height: "25px",
    },
});

const ProductView = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={{ xs: 2 }} justifyContent="center">
                <Grid item>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item xs={10}>
                            <Typography align="center" variant="h4">
                                Checaste chocolate kit-kat 41.5g
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography align="center">
                                Aqui conoceras más de este produco:
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item>
                            <OutlinedCard></OutlinedCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} marginTop={3}>
                    <Grid container spacing={{ xs: 2 }} justifyContent="center">
                        <Grid item>
                            <PrimaryButton
                                buttonText="Escanear"
                                color="secondary"
                                type="submit"
                                variant="contained"
                                startIcon={<QrCodeScannerOutlinedIcon />}
                                classes={classes.productViewButton}

                            />
                        </Grid>
                        <Grid item>
                            <PrimaryButton
                                buttonText="Home"
                                color="primary"
                                type="submit"
                                variant="contained"
                                startIcon={<HomeTwoToneIcon />}
                                classes={classes.productViewButton}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductView;
