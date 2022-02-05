import { Grid } from "@mui/material";
import React from "react";
import OutlinedCard from "../../Components/Cards/OutlinedCard";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";

const ProductView = () => {
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
                                size="sm"
                            />
                        </Grid>
                        <Grid item>
                            <PrimaryButton
                                buttonText="REGISTRATE"
                                color="primary"
                                type="submit"
                                variant="contained"
                                size="sm"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductView;
