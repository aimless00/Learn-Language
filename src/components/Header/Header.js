import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Menu></Menu>
            <div className="header-text">
                <h1>Learn a Language</h1>
                <p>Learn a language right here with hundreds of free language-learning lessons, games and activities. Join us and have some fun.</p>
                <button className="btn">Start Learning Now</button>
            </div>
        </div>
    );
};

export default Header;