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
import Mylists from "./Pages/Mylists/MyLists"
//
import { SnackProvider } from "./Context/Snackcontext";
import UserProvider, { UserContext } from "./Context/UserContext.jsx";
import Navbar from "./Components/Navbar/Navbar";
import { ModalProvider } from "./Context/ModalContext";
import MyLists from "./Pages/Mylists/MyLists";

function App() {
    return (
        <UserProvider>
            <SnackProvider>
                <ModalProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/feedinguser"
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
                            <Route path="/mylists" element={<Mylists/>} />
                        </Routes>
                    </BrowserRouter>
                </ModalProvider>
            </SnackProvider>
        </UserProvider>
    );
}

export default App;
