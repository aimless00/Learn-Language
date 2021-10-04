import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://aimless00.github.io/languageApi/language.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    }, [])
    return (
        <div className="services-section">
            <Menu></Menu>
            <h1>Our Services</h1>
            <div className="service-display">
                {
                    services.map(service=> <Service 
                        key={service.id}
                        service={service}
                        ></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;