import React from "react";
import Background from './Components/Backgrounds/Background.jsx'
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Button from '@mui/material/Button';
import PrimaryButton from "./Components/Buttons/Primary/PrimaryButton";
import MainCard from "./Components/Cards/MainCard";
import Login from "./Components/Login/Login.jsx";
import AlertMessage from "./Components/Alerts/AlertMessage.jsx";
import ImModal from "./Components/Modal/ImModal";
import Testing from "./Components/Testing/Testing.jsx";



function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <>
      {/* <Login></Login> */}
      <Testing/>
    </>
  );
}

export default App;