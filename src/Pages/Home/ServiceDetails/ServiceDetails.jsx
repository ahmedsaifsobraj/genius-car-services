import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
   const {servicesId} = useParams();
    return (
        <div>
            <h2>Welcome to Details: {servicesId}</h2>
        </div>
    );
};

export default ServiceDetails;