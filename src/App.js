import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Room } from "./components/room/Room";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar
          content={
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/rooms/:code" element={<Room />} />
            </Routes>
          }
        />
      </div>
    </React.Fragment>
  );
}

export default App;
