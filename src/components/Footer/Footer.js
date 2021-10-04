import React from 'react';
import './Footer.css';
import logo from '../../logo.jpg';
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <img className="img" src={logo} alt="" />
                <h3>Learn Language</h3>
            </div>
            <div className="language-footer">
                <h5>Learn Language Online:</h5>
                <p><small>English</small></p>
                <p><small>Spanes</small></p>
                <p><small>Chinese</small></p>
                <p><small>Russian</small></p>
                <p><small>Arabic</small></p>
                <p><small>Italian</small></p>
                <p><small>French</small></p>
            </div>
            <div>
                <h5>Contact us by Email</h5>
                <p><small>support@learnlanguage.com</small></p>
                <br />
                <h5>Connect with us:</h5>
                <p><i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-instagram"></i></p>
                
            </div>
        </div>
        </footer>
    );
};

export default Footer;