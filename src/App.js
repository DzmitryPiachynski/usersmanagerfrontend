import React from "react";
import NavBar from "./components/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddUser from "./pages/AddUser";
function App() {
  return (
      <div className="App">
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/add" element={ <AddUser /> } />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
