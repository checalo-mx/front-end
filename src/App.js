import React from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Button from '@mui/material/Button';
// import PrimaryButton from "./Components/Buttons/Primary/PrimaryButton";
import MainCard from "./Components/Cards/MainCard";


function App() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
    {/* <PrimaryButton color="error">Login</PrimaryButton>
    <PrimaryButton color="secondary">sign in</PrimaryButton> */}
    <MainCard/>
    </>
  );
}

export default App;