import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";


const Headercontainer = (props) => {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid
                    container
                    justifyContent="center"
                    className={props.classes}>

                    <Grid item xs={10} marginBottom={5} marginTop={7}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography align="center" variant="h3">
                                    {props.titleText}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={10}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography align="left" fontWeight= "500" variant="h6">
                                    {props.containerText}
                                </Typography>
                                <Typography align="center" fontWeight= "600" variant="h6" marginTop={3}>
                                    {props.containerText2}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <Grid item xs={10} >
                        <Typography align="center" fontWeight= "500" variant="h6">
                            {props.containerText}
                        </Typography>
                        <Typography align="center" fontWeight= "600" variant="h6" marginTop={3}>
                            {props.containerText2}
                        </Typography>
                    </Grid> */}

                    <Grid item xs={10} marginBottom={7} marginTop={1}>
                        <Grid container justifyContent="center">
                            <Button
                                size={props.buttonSize}
                                type={props.buttonType}
                                color={props.buttonColor}
                                variant={props.buttonVariant}
                                disabled={props.disabled}
                                href={props.buttonLink}
                            >
                                {props.buttonText}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Headercontainer;