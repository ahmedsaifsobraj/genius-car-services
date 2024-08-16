import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = (props) => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;