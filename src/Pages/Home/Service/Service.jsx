import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';
const Service = ({service}) => {
    const {id, name, price, description , img}=service;
    const nav = useNavigate();
    const handleServiceDetails =(id)=>{
        nav(`/services/${id}`);
    }
    return (
        <div id='services' className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleServiceDetails(id)}>Book Service</button>
        </div>
    );
};

export default Service;