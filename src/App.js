import React from "react";
import { useContext } from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSettings from "./Pages/UserSettings/UserSettings";
import Home from "./Pages/Home/Home";
import FeedingUser from "./Pages/FeedingUser/FeedingUser";
import ProductView from "./Pages/ProductView/ProductView";
import Landing from "./Pages/Landing/Landing";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Scanner from "./Pages/Scanner/Scanner";
//
import { SnackProvider } from "./Context/Snackcontext";
import UserProvider, {UserContext} from "./Context/UserContext.jsx";
import Navbar from "./Components/Navbar/Navbar";

function App() {

    return (
        <UserProvider>
            <SnackProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/feedinguser/:id"
                            element={<FeedingUser />}
                        />
                        <Route
                            path="/usersettings"
                            element={<UserSettings />}
                        />
                        <Route
                            path="/productview/:barcode"
                            element={<ProductView />}
                        />
                        <Route
                            path="/changePassword"
                            element={<ChangePassword />}
                        />
                        <Route path="/scanner" element={<Scanner />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/nav" element={<Navbar />} />

                    </Routes>
                </BrowserRouter>
            </SnackProvider>
        </UserProvider>
    );
}

export default App;
