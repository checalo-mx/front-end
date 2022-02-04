import React from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import UserSettings from "./Pages/UserSettings/UserSettings";
import Home from "./Pages/Home/Home";
import FeedingUser from "./Pages/FeedingUser/FeedingUser";

function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usersettings" element={<UserSettings/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/feedinguser/:id" element={ <FeedingUser/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;