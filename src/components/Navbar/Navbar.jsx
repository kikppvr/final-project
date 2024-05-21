import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`navbar ${location.pathname == '/' ? 'is-homepage' : ''}`}>
            <div className="navbar-mobile flex justify-between w-full">
                <div>
                    <a href="/" className="flex items-center">
                        <img src="assets/icons/logo.svg" alt="" className="logo"/>
                        <span className="brand-title">Healthy Me</span>
                    </a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            
            
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <div className="navbar-left">
                    <a href="/" className="flex items-center">
                        <img src="assets/icons/logo.svg" alt="" className="logo"/>
                        <span className="brand-title">Healthy Me</span>
                    </a>
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
                        <a href="/register" className="navbar-item__register">Register</a>
                    </div>
                    <div className="navbar-item">
                        <a href="/login" className="navbar-item__login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
