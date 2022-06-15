import React from 'react';

const ContactMe = () => {
    return (
        <div className='edu-bg text-center p-3'>
            <h2 className='text-center text-white'>Contact Page</h2>
            <form action="https://formsubmit.co/el/gayipo" method="POST">
                <input type="text" name="Name" placeholder='Full Name' id=""  required/> <br />
                <input type="email" name="Email" placeholder='Email' id=""  required/> <br />
                <select name="continent" id="">
                    <option value="">Africa</option>
                    <option value="">Antarctica</option>
                    <option value="">asia</option>
                    <option value="">Australia</option>
                    <option value="">Europe</option>
                    <option value="">North America</option>
                    <option value="">South America</option>
                </select> <br />
                <textarea name="Message" placeholder='Message' id="" cols="30" rows="10" required></textarea> <br />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactMe;