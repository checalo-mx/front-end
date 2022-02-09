import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Scanner () {

    const navigate = useNavigate()

    const handleScanner = ( err, result ) => {
        if ( result ) {
            navigate(`/productview/${result.text}`)
        }
    }

    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item xs={9}>
                    <Typography component="h1" variant="h5" sx={{my: 3}}>
                        Escanea el código de barras de tu producto.
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <BarcodeScannerComponent
                        onUpdate={handleScanner}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Scanner;