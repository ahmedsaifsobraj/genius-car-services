import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const { servicesId } = useParams();
    return (
        
        <div>
            <PageTitle title='Services'></PageTitle>
            <h2>Welcome to Details: {servicesId}</h2>
            <div>
                <Link to='/checkout'><Button className='btn btn-primary'>Proceed CheckOut</Button></Link>
            </div>
        </div>

    );
};

export default ServiceDetails;