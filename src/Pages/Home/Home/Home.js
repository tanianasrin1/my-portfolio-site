import React from 'react';
import About from '../../About/About';
import ContactMe from '../../ContactMe/ContactMe';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import Pricing from '../Pricing/Pricing';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Education></Education>
            <Pricing></Pricing>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;