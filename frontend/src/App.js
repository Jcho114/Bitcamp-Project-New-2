import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Home from "./Home.js";
import Demo from "./Demo.js";
import Login from "./Login.js";
import PlayGround from "./Playground.js";
import "./App.css";

const App = () => {
  let location = useLocation();

  return (
    <div className="App">
      {!location.pathname.includes("/login") ? <NavBar /> : <></>}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/demo" exact element={<Demo />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/playground" exact element={<PlayGround />} />
      </Routes>
    </div>
  );
};

export default App;
