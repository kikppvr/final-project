import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    // const location = useLocation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            A health website dedicated to providing valuable
                            information and advice for a better life.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="https://who.int">
                                    World Health Organization (WHO)
                                </a>
                            </li>
                            <li>
                                <a href="https://cdc.gov">
                                    Centers for Disease Control and Prevention
                                    (CDC)
                                </a>
                            </li>
                            <li>
                                <a href="https://mayoclinic.org">Mayo Clinic</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="/contact">Online Contact Form</a>
                            </li>
                            <li>
                                <a href="mailto:info@healthwebsite.com">
                                    info@healthwebsite.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890">+1 234 567 890</a>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="https://facebook.com">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="footer-section">
                    <h3>Subscribe</h3>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div> */}
                <div className="footer-bottom">
                    <p>&copy; 2024 HealthWebsite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
