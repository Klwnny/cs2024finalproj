import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artifact from "./components/Artifacts";
import Cooking from "./components/Cooking";
import Fish from "./components/Fish";
import Home from "./components/Home";
import Items from "./components/Items";
import Minerals from "./components/Minerals";


import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>  
        <div>
          <Home />
          <Routes>
            <Route path="/Artifacts" element={<Artifact />}></Route>
            <Route path="/Cooking" element={<Cooking />}></Route>
            <Route path="/Fish" element={<Fish />}></Route>
            <Route path="/Items" element={<Items />}></Route>
            <Route path="/Minerals" element={<Minerals />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
