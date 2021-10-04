import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../Images/logo.jpg';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="container">
                <div className="logo-section">
                    <img src={logo} alt="" />
                    <h2>Learn a Language</h2>
                </div>
                <div>
                    <Navbar>
                        <Container className="menu">
                            <Link to="/home" className="menu-link">
                            <li>Home</li>
                            </Link>
                            <Link to="/services" className="menu-link">
                            <li>Services</li>
                            </Link>
                            <Link to="/about" className="menu-link">
                            <li>About us</li>
                            </Link>
                            <Link to="contact" className="menu-link">
                            <li>Contact us</li>
                            </Link>
                        </Container>                
                    </Navbar>
                </div>
        </nav>
    );
};

export default Menu;