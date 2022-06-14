import React from 'react';
import './Banner.css'
import bg from '../../../images/p_n.jpg'
import { Button } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
           <div className='d-flex container justify-content-between'>
              <div className='p-5'>
                 <h1 className='text-white'>I'm Web Developer</h1>
                 <h4 className='text-white pb-3'>Tania Nasrin</h4>
                 <Button variant="outline-info">My Resume</Button>
              </div>
              <div>
                <img className='p-5' height="500px" src={bg} alt="" />
              </div>
           </div>
       
        </div>
    );
};

export default Banner;

