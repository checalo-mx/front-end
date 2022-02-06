import React from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { 
  BrowserRouter, 
  Routes, 
  Route,
 } from "react-router-dom";
import UserSettings from "./Pages/UserSettings/UserSettings";
import Home from "./Pages/Home/Home";
import FeedingUser from "./Pages/FeedingUser/FeedingUser";
import ProductView from "./Pages/ProductView/ProductView";
import Landing from "./Pages/Landing/Landing";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Configuracionalimentacion from "./Pages/Configuracionalimentacion/Configuracionalimentacion"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usersettings" element={<UserSettings/>}/>
        <Route path="/configuracionalimentacion" element={<Configuracionalimentacion/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
=======
>>>>>>> feature/ConfiguracionAlimentacion
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Scanner from "./Pages/Scanner/Scanner";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feedinguser/:id" element={ <FeedingUser/> } />
                <Route path="/usersettings" element={<UserSettings />} />
                <Route path="/productView" element={<ProductView />} />
                <Route path="/changePassword" element={<ChangePassword/>}/>
                <Route path="/scanner" element={<Scanner/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
<<<<<<< HEAD
=======
>>>>>>> 81f03fe4bc329aef47fa683144a53e0dc407b9e5
>>>>>>> feature/ConfiguracionAlimentacion
}

export default App;