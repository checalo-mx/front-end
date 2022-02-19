import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import {Link as StyledLink} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';




const Pagecontainer = (props) => {
    return (
        <div>
            <Grid container justifyContent="center" border={0}>
                <Grid
                    container
                    justifyContent="center"
                    className={props.classes}>

                    <Grid item xs={10} marginBottom={5} marginTop={5}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography align="center" variant="h3">
                                    {props.titleText}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={10} marginTop={-3}>
                        <Grid container justifyContent="center">
                            <p>{props.containerText}</p>
                        </Grid>
                    </Grid>

                    <Grid item xs={10} marginTop={5}>
                        <Grid container justifyContent="center">
                            <a>{props.containerLink}</a>
                        </Grid>
                    </Grid>

                    <Grid item xs={10} marginBottom={2}>
                        <Grid container justifyContent="center">
                            <img alt="imagen del contenedor" src={props.svg} />
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={10} marginBottom={7}>
                        <Grid container justifyContent="center">
                            <Button
                                size={props.buttonSize}
                                type={props.buttonType}
                                color={props.buttonColor}
                                variant={props.buttonVariant}
                                disabled={props.disabled}
                                href={props.buttonLink}
                                endIcon={props.endIcon}
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



export default Pagecontainer;
