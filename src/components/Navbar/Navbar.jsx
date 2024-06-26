import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions";
import "./Navbar.scss";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDropdownProfile, setIsOpenDropdownProfile] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo  = useSelector((state) => state.userReducer.userInfo)

    // console.log('userInfo: ', userInfo)

    const handleLogout = () => {
        dispatch(logout());
        window.location.replace('/')
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleDropdownProfile = () => {
        setIsOpenDropdownProfile(!isOpenDropdownProfile);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const activeMenu = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={`navbar fixed-top ${scrolled ? 'navbar-scrolled' : ''} ${location.pathname == '/' ? 'theme-transparent' : ''}`}>
            <div className="container-fluid">
                {/* navbar desktop*/}
                <div className="navbar-mobile">
                <div className="flex justify-between items-center w-full">
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <a href="/" className="navbar-brand">
                        <img src="assets/icons/logo.svg" alt="brand"/>
                        <span className="navbar-brand-title">Healthy Me</span>
                    </a>
                    { userInfo ? (
                            <div className="navbar-right flex items-center">
                                 <div className="mr-4">
                                    <CartIcon />
                                </div>
                                <div className="navbar-profile" onClick={toggleDropdownProfile}>
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    {/* <img src="assets/images/profile/default-profile.png" alt="" className="w-[40px] h-[40px]"/> */}
                                    <div className="navbar-profile-title">{userInfo.username}</div>
                                </div>
                                {isOpenDropdownProfile && (
                                    <div className="navbar-dropdown">
                                        <div className="navbar-dropdown-item">
                                            <a href="/profile" className="navbar-dropdown-link">
                                                <i className="fa-solid fa-user"></i>
                                                Profile
                                            </a>
                                        </div>
                                        <div className="navbar-dropdown-item">
                                            <a href="/" className="navbar-dropdown-link">
                                                <i className="fa-solid fa-gear"></i>
                                                Setting
                                            </a>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="navbar-dropdown-item" onClick={handleLogout}>
                                            <div className="navbar-dropdown-link">
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Sign out
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="navbar-right flex items-center">
                                <div className="mr-4">
                                    <CartIcon />
                                </div>
                                <div className="navbar-profile" onClick={toggleDropdownProfile}>
                                    <i className="fa-solid fa-gears"></i>
                                </div>
                                {isOpenDropdownProfile && (
                                    <div className="navbar-dropdown">
                                        <div className="navbar-dropdown-item">
                                            <a href="/register" className="navbar-dropdown-link">Register</a>
                                        </div>
                                        <div className="navbar-dropdown-item">
                                            <a href="/login" className="navbar-dropdown-link">Login</a>
                                        </div>

                                    </div>
                                )}
                            </div>
                        )}
                </div>
        
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <div className="navbar-list">
                        <div className="navbar-item">
                            <a href="/health-calculations" className="navbar-link">Health Calculations</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/recipes" className="navbar-link">Recipes</a>
                        </div>
                        <div className="navbar-item">
                            <a href="/products" className="navbar-link">Products</a>
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
                            <div className={`navbar-item ${activeMenu('/health-calculations')}`}>
                                <a href="/health-calculations" className="navbar-link">Health Calculations</a>
                            </div>
                            <div className={`navbar-item ${activeMenu('/recipes')}`}>
                                <a href="/recipes" className="navbar-link">Recipes</a>
                            </div>
                            <div className={`navbar-item ${activeMenu('/products')}`}>
                                <a href="/products" className="navbar-link">Products</a>
                            </div>
                        </div>
                        { userInfo ? (
                             <div className="navbar-right flex items-end">
                                 <div className="mr-4">
                                    <CartIcon />
                                </div>
                               <div className="navbar-profile" onClick={toggleDropdownProfile}>
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    {/* <img src="assets/images/profile/default-profile.png" alt="" className="w-[40px] h-[40px]"/> */}
                                    <div className="navbar-profile-title">{userInfo.username}</div>
                                </div>
                                {isOpenDropdownProfile && (
                                    <div className="navbar-dropdown">
                                        <div className="navbar-dropdown-item">
                                            <a href="/profile" className="navbar-dropdown-link">
                                                <i className="fa-solid fa-user"></i>
                                                Profile
                                            </a>
                                        </div>
                                        <div className="navbar-dropdown-item">
                                            <a href="/" className="navbar-dropdown-link">
                                                <i className="fa-solid fa-gear"></i>
                                                Setting
                                            </a>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="navbar-dropdown-item" onClick={handleLogout}>
                                            <div className="navbar-dropdown-link">
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Sign out
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="navbar-right flex items-center">
                                 <div className="navbar-item">
                                    <CartIcon />
                                </div>
                                <div className="navbar-item">
                                    <a href="/register" className="navbar-link navbar-link__register">Register</a>
                                </div>
                                <div className="navbar-item">
                                    <a href="/login" className="navbar-link navbar-link__login">Login</a>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
