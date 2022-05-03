import React, { useEffect, useState } from 'react'
import ServicesDetails from '../ServicesDetails/ServicesDetails';
// integrate commerce js

const Services = () => {
   
    const [serviceData, setSericeData] = useState([])
    useEffect(()=>{
        fetch('place here your api',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setSericeData(data));
    },[])
    return (
        <section className="services-container mt-5 pt-5 mb-5">
            <div className="text-center">
                <h3 style={{color: "#2D2D2D"}}>The Greatest <span style={{color: "#7AB259"}}>Partners</span> </h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="container row d-flex justify-content-center mt-5 pt-3">
                {
                    serviceData.length > 0 ? serviceData.map(service => <ServicesDetails service={service} key={service.name}></ServicesDetails>)
                    :
                    <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                    </div>
                }
            </div>
        </div>
        </section>
    );
};

export default Services;