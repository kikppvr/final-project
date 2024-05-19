import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";
import "./assets/styles/index.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                {/* <main className="container"> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/features" element={<Features />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/about" element={<About />} /> */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                {/* </main> */}
            </div>
        </Router>
    );
}

export default App;
