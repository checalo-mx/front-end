import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";


const FixedBottomNavbar = () => {

    const navigate = useNavigate();
    const [value, setvalue] = React.useState(0);

    return (
        <Box backgroundColor= "#2DDA93" sx={{ position: "fixed", bottom: 0, left: 0, right: 0, }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setvalue(newValue);
                }}
            >
                <BottomNavigationAction label="Atrás" icon={<ArrowBackIosNewIcon />} onClick={() => navigate(-1)} />
                <BottomNavigationAction label="Escáner" icon={<QrCodeScannerIcon />} onClick={() => navigate("/scanner")} />
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate("/home")} />
            </BottomNavigation>
        </Box>
    );
};

export default FixedBottomNavbar;
