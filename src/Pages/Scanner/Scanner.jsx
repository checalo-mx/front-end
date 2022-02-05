import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";

function Scanner () {
    const [barcode, setBarcode] = useState("No found");

    const handleScanner = ( err, result ) => {
        if ( result ) {
            setBarcode(result.text);
            alert(result.text);
        } else {
            setBarcode("No found");
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