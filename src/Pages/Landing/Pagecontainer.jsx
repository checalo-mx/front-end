import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Pagecontainer = (props) => {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid
                    container
                    justifyContent="center"
                    className={props.classes}
                    // sx={{
                    //     // display: "flex",
                    //     // alignItems: "center",
                    //     // justifyContent: "center",
                    //     border: "1px solid red",
                    //     // width: "380px",
                    //     // height: "640px",
                    //     // marginTop: "8px",
                    //     // bgcolor: color,
                    // }}
                >
                    <Grid item xs={10} marginBottom={5} marginTop={5}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography align="center" variant="h4" component="div">
                                    {props.titleText}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} marginBottom={5}>
                        <Grid container justifyContent="center">
                            <p>{props.containerText}</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} marginBottom={5}>
                        <Grid container justifyContent="center">
                            <Button
                                // fullWidth
                                size={props.buttonSize}
                                type={props.buttonType}
                                color={props.buttonColot}
                                variant={props.buttonVariant}
                                disabled={props.disabled}
                                href={props.buttonLink}
                            >
                                {props.buttonText}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} marginBottom={5}>
                        <Grid container justifyContent="center">
                            <img alt="UI" src={props.svg} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Pagecontainer;
