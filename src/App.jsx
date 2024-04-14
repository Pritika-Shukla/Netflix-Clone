import React from "react";
import './App.css'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Netflix from "./pages/Netflix/Netflix";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Player from "./pages/Player";
export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/" element={<Netflix/>}></Route>
      <Route exact path="/player" element={<Player/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}


