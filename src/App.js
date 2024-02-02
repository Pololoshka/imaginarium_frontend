import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import NavBar  from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar
      content ={
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      }
      />
    </div>
  );
}

export default App;
