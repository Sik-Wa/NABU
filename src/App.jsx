import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Material from './Pages/Material'
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import LandingPage from "./Pages/LandingPage";
import ToDos from "./Pages/ToDos";



function App() {
  return (
    <>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/materials" Component={Material} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={LandingPage} />
        <Route path="/todo" Component={ToDos} />
      </Routes>
    </>
  );
}

export default App;
