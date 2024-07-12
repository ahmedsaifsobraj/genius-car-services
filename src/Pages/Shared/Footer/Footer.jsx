import React from 'react';

const Footer = (props) => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center '>
            <p><small>
                © {year} </small></p>
        </footer> 
    );
};

export default Footer;