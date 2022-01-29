import React from "react";
import Background from './Components/Backgrounds/Background.jsx'
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <>
    <Background>
      Hola
    </Background>
     </>
  );
}

export default App;