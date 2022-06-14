import React from 'react';
import img from '../../images/p_n.jpg'
import {ProgressBar  } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-white text-center mt-5 mb-4'>About Me</h1>
            <div className='d-flex'>
                <div>
                    <img height={400}  src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-info text-center'>SKILLS</h2>
                    <div className='p-5'>
                       <p className='text-white text-center' >I am a professional web-developer. I worked with many type of code making.I am a hard-working and reliable web developer. I love being in this line of work because I am passionate about technology, design and innovation. I like doing this work because it gives me confidence and lots of joy. Do you need a high-quality clean coded WordPress website or software? I will help you with that.</p>
                   
                       <button  type="button" class="btn btn-outline-info">Contact Me</button>
                  
                    </div>
                
                </div>
                
            </div>

            <div className='mt-4'>
                   <p className='text-white'>HTML</p>
                   <ProgressBar variant="success" now={90} />
                   <p className='text-white'>CSS</p>
                   <ProgressBar variant="info" now={70} />
                   <p className='text-white'>REACT</p>
                   <ProgressBar variant="warning" now={80} />
                   <p className='text-white'>NODEJS</p>
                   <ProgressBar variant="danger" now={60} />
                </div>
        </div>
    );
};

export default About;