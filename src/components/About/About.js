import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './About.css'

const About = () => {
    return (
        <div className="about-section">
            <Menu></Menu>
            <div className="about-text">
                <div className="text-section">
                    <h2>Saving the World One Language at a Time</h2>
                    <p>is owned and operated by Certification Coaching Ltd a USA Registered Company. It exists to help people bridge communication gaps and to give back to the world in which we live.</p>
                    <h3>Background</h3>
                    <p>The company was formed in 2010 and got the ownership of the Visual Link™ Course - the best method in the world for learning languages (according to our customers). Visual Link® and its free language learning lessons on its websites has been used by millions of individuals in over 130 countries worldwide.Language Software sold by Certification Coaching Ltd has also been taught at government agencies, major corporations, secondary schools and universities. This website was created to give people an advanced option to learn a language. It is estimated that the site will have 6 million visitors per month by the mid-2013.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;