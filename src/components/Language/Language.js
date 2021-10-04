import React from 'react';
import './Language.css'

const Language = (props) => {
    const {name, country, img, price} = props.language
    return (
        
            <div className="d-flex align-content-center m-3">
            <div className="img-section">
                <img width="250px" src={img} alt="" />
            </div>
            <div className="language-text">
                <h3>Name: {name} </h3>
                <p>Country: {country} </p>
                <h5>Price: ${price} </h5>
                <button className="btn">Start  Now </button>
            </div>
        </div>
    );
};

export default Language;