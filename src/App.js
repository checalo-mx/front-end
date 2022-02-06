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
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import RecoverPassword from "./Pages/RecoverPassword/RecoverPassword";
import RecoverPasswordSuccess from "./Pages/RecoverPassword/RecoverPasswordSuccess";

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
                <Route path="/recoverpassword" element={<RecoverPassword/>}/>
                <Route path="/recoverpasswordok" element={<RecoverPasswordSuccess/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;