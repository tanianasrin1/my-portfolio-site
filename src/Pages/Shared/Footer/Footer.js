import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footerBg'>
            <h6 className='text-white text-style text-center'>Copyright @ {year} Tania All Right Reserved </h6>
        </div>
    );
};

export default Footer;