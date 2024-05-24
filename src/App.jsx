import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import HealthCalculations from "./pages/HealthCalculations/HealthCalculations";
import "./App.css";
import "./assets/styles/index.css";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/health-calculations" element={<HealthCalculations />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
