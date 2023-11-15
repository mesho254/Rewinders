import React from 'react';
import Image1 from '../assets/images/WhatsApp Image 2023-11-07 at 08.33.05_a1edb51b.jpg'
import '../styles/ServicesSection.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ServicesSection = () => {

    return (
      <div className="about-section">
        <section className='about-why'>
            <h1>Our Services</h1>
            <div className='about-school'>
            <p>Welcome to our motor company! We specialize in providing a wide range of motors for various needs.
              Whether you are looking to buy, sell, or repair a motor, we have you covered with top-notch services.</p>
            <img src={Image1} alt='' className='image'/>
            </div>
            <div className='about-button'>
                <p>You Can view all available Services Here</p>
                <Link to='/services'>
                <Button variant='contained'>View Our Services</Button></Link>
            </div>
            </section>
      </div>
    );
  };
  
  export default ServicesSection;
  

