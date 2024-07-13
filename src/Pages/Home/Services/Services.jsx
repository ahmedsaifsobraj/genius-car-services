import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Services = (props) => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    })
    return (
        <div>
            <h1 className='service-title'>Our Services</h1>
            <div className="service-container">
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
            <div>
                <Link to='/checkout'><Button className='btn btn-primary'>Proceed CheckOut</Button></Link>
            </div>

        </div>
    );
};

export default Services;