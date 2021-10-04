import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-section">
            <Menu></Menu>
            <div className="contact-text">
                <div className="m-4">
                    <h1>Mailing Address</h1>
                    <p>Company number: +1833 448 1403</p>
                    <p>Company name: LANGUAGECOACHING LIMITED</p>
                    <p>Address: House Ton th79</p>
                    <p>City: New York</p>
                    <p>Country: USA</p>
                </div>
                <div className="m-4">
                    <h2>Contact us by Email</h2>
                    <p>support@learnlanguages.com</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;