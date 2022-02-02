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
import Landing from "./Pages/Landing/Landing";

function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
