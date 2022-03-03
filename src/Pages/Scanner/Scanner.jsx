import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState, useEffect, useContext } from "react";
import { Container, Grid, Typography, Checkbox, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { FlashOn, FlashOff, HomeTwoTone } from "@mui/icons-material";
import Background from "../../Components/Backgrounds/Background";
import { UserContext } from "../../Context/UserContext";
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { SnackCtx } from "../../Context/Snackcontext";

function Scanner() {
    const [tourch, setTourch] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [manualSearch, setManualSearch] = useState(false);
    const [barcode, setBarcode] = useState("");
    const { openSnackbar, closeSnackbar } = useContext(SnackCtx);

    useEffect(() => {
        if (user.logged === false) {
            navigate("/login");
        }
    }, []);

    const handleScanner = (err, result) => {
        if (result) {
            navigate(`/productview/${result.text}`);
        }
    };

    const handleTourch = () => {
        setTourch(!tourch);
    };

    const handleManualSearch = () => {
        setManualSearch(!manualSearch);
    };

    return (
        <div>
            <Navbar />
            <Background />
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    rowSpacing={3}
                    marginTop={1}
                    marginBottom={10}
                >
                    <Grid item xs={9}>
                        <Typography component="h1" variant="h5">
                            Escanea el código de barras de tu producto.
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <BarcodeScannerComponent
                            onUpdate={handleScanner}
                            torch={tourch}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={9}
                        columnSpacing={2}
                        marginTop={3}
                        marginBottom={5}
                    >
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={handleTourch}
                            >
                                <Checkbox
                                    icon={<FlashOff />}
                                    checkedIcon={<FlashOn color="warning" />}
                                    onChange={handleTourch}
                                    checked={tourch}
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                startIcon={<HomeTwoTone />}
                                variant="outlined"
                                sx={{
                                    height: "100%",
                                    "& .MuiSvgIcon-root": { fontSize: "24px" },
                                }}
                                onClick={handleManualSearch}
                            >
                                Búsqueda manual
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "40px" }}>
                            <OutlinedInput
                                sx={{
                                    display: manualSearch ? "flex" : "none",
                                }}
                                type="text"
                                value={barcode}
                                required
                                onChange={(e) => setBarcode(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {
                                                if (barcode.length >= 8) {
                                                    navigate(
                                                        `/productview/${barcode}`
                                                    );
                                                } else {
                                                    openSnackbar(
                                                        "Algo anda mal con el código ingresado",
                                                        "error"
                                                    );
                                                }
                                            }}
                                            edge="end"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Código de barras"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <FixedBottomNavbar />
        </div>
    );
}

export default Scanner;
