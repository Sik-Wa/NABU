import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Material from './Pages/Material'
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/materials" Component={Material} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </>
  );
}

export default App;
