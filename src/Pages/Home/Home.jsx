import React from 'react';
import Background from '../../Components/Backgrounds/Background';
import HomeButtons from "../../Components/Buttons/Primary/HomeButtons"
import Escanerlogo from "../../Pages/Svg/scanlogo.svg"

const Home = () => {
  return <div>
      <Background
       />
       <HomeButtons
       svg={Escanerlogo}
       />
     
  </div>;
};

export default Home;


