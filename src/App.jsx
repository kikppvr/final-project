import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import HealthCalculations from "./pages/HealthCalculations/HealthCalculations";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
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
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/edit-profile" element={<EditProfile />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
