import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import {Link as StyledLink} from "react-router-dom";

const Footercontainer = (props) => {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid
                    container
                    justifyContent="center"
                    className={props.classes}>

                    <Grid item xs={10} marginTop={2}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography align="center" variant="h3">
                                    {props.titleTextFooter}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={10} marginBottom={4} marginTop={2}>
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

                    <Grid item xs={10} paddingBottom={5} justifyContent="center" marginBottom={10}>
                        <Link component={StyledLink} to ="/home" underline="none" rel="noopener" color="inherit">{props.footerText1}</Link><br></br>
                        <Link component={StyledLink} to ="/scanner" underline="none" rel="noopener" color="inherit">{props.footerText2}</Link><br></br>
                        <Link component={StyledLink} to ="/login" underline="none" rel="noopener" color="inherit">{props.footerText3}</Link><br></br>
                        <Link component={StyledLink} to ="/signup" underline="none" rel="noopener" color="inherit">{props.footerText4}</Link><br></br>
                        <Link component={StyledLink} to ="/" underline="none" rel="noopener" color="inherit">{props.footerText5}</Link><br></br>
                        <Link component={StyledLink} to ="/" underline="none" rel="noopener" color="inherit">{props.footerText6}</Link><br></br>
                        <Link component={StyledLink} to ="/" underline="none" rel="noopener" color="inherit">{props.footerText7}</Link><br></br>
                    </Grid>
                    

                </Grid>
            </Grid>
        </div>
    );
};

export default Footercontainer;