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
import ProductView from "./Pages/ProductView/ProductView";
import Landing from "./Pages/Landing/Landing";
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
import ChangePassword from "./Pages/ChangePassword/ChangePassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/usersettings" element={<UserSettings />} />
                <Route path="/" element={<Home />} />
                <Route path="/productView" element={<ProductView />} />
                <Route path="/changePassword" element={<ChangePassword/>}/>
            </Routes>
        </BrowserRouter>
    );
>>>>>>> 81f03fe4bc329aef47fa683144a53e0dc407b9e5
}

export default App;