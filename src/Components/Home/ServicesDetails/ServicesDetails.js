import React from 'react';
import './ServicesDetails.css'
const ServicesDetails = ({ service }) => {
    return (
        <div className="addedService col-lg-3 col-md-4 col-sm-6 col-12 text-center mb-3" style={{cursor: "pointer"}}>
            <img style={{height: '50px'}} src={`data:image/png;base64,${service.image.img}`}alt="" />
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className="">{service.description}</p>
        </div>
    );
};

export default ServicesDetails;