import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, img, price, country} = props.service
    return (
        <div className="containers">
            <div className="service">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <div className="service-text">
                    <h2>Service Name: {name} Language</h2>
                    <p>Uses Country: {country}</p>
                    <h3>Course Fee: ${price}</h3>
                    <button className="btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;