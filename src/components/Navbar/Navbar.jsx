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
        <nav className={`navbar ${location.pathname == '/' ? 'theme-transparent' : ''}`}>
             {/* navbar desktop*/}
            <div className="navbar-mobile">
                <div className="flex justify-between items-center w-full">
                    <a href="/" className="navbar-brand">
                        <img src="assets/icons/logo.svg" alt="brand"/>
                        <span className="navbar-brand-title">Healthy Me</span>
                    </a>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
        
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <div className="navbar-list">
                        <div className="navbar-item">
                            <a href="/" className="navbar-list">Feature</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-list">Blog</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-list">Recipes</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-list">About</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar desktop*/}
            <div className="navbar-desktop">
                <div className={`navbar-menu`}>
                    <div className="navbar-left">
                        <a href="/" className="navbar-brand">
                            <img src="assets/icons/logo.svg" alt="logo"/>
                            <span className="navbar-brand-title">Healthy Me</span>
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
                            <a href="/register" className="navbar-link-register">Register</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/login" className="navbar-link-login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            
          
        </nav>
    );
};

export default Navbar;
