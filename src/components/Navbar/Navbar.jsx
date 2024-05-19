import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <div className="navbar-left">
                    <a href="/" className="logo">My Logo</a>
                </div>
                <div className="navbar-center">
                    <div className="navbar-item">
                        <a href="/" className="">Feature</a>
                    </div>
                    <div className="navbar-item">
                        <a href="/" className="">Blog</a>
                    </div>
                    <div className="navbar-item">
                        <a href="/" className="">Recipes</a>
                    </div>
                    <div className="navbar-item">
                        <a href="/" className="">About</a>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-item">
                        <a href="/register" className="register">Register</a>
                    </div>
                    <div className="navbar-item">
                        <a href="/login" className="login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
