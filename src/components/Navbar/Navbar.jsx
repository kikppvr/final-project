import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions";
import "./Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo  = useSelector((state) => state.userReducer.userInfo)

    console.log('userInfo: ', userInfo)

    const handleLogout = () => {
        dispatch(logout());
        navigate(0)
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`navbar fixed-top ${location.pathname == '/' ? 'theme-transparent' : ''}`}>
            <div className="container-fluid">
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
                        <a href="/health-calculations" className="navbar-link">Health Calculations</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-link">Feature</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-link">Blog</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/" className="navbar-link">Recipes</a>
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
                                <a href="/health-calculations" className="navbar-link">Health Calculations</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/" className="navbar-link">Feature</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/" className="navbar-link">Blog</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/" className="navbar-link">Recipes</a>
                            </div>
                        </div>
                        { userInfo ? (
                             <div className="navbar-right">
                                <div className="navbar-item">
                                    <a href="/" className="navbar-link">{userInfo.username}</a>
                                </div>
                                <div className="navbar-item">
                                    <div className="navbar-link" onClick={handleLogout}>Logout</div>
                                </div>
                            </div>
                        ) : (
                            <div className="navbar-right">
                                <div className="navbar-item">
                                    <a href="/register" className="navbar-link navbar-link__register">Register</a>
                                </div>
                                <div className="navbar-item">
                                    <a href="/login" className="navbar-link navbar-link__login">Login</a>
                                </div>
                            </div>
                        )}
                        {/* <div v-if={userInfo}>
                            <div className="navbar-item">
                                <a href="/" className="navbar-link"></a>
                            </div>
                            <div className="navbar-item">
                                <a href="/" className="navbar-link">Logout</a>
                            </div>
                        </div>
                        <div className="navbar-right" v-else>
                            <div className="navbar-item">
                                <a href="/register" className="navbar-link navbar-link__register">Register</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/login" className="navbar-link navbar-link__login">Login</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
