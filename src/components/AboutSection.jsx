import React from 'react';
import Slider from 'react-slick';
import '../styles/AboutUs.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@mui/material';

const AboutUs = () => {
  const AboutPosts = [
    {
      id: 1,
      title: 'MISSION',
      content: 'Our mission is to drive innovation in the field of electric motors, ensuring reliability and efficiency across diverse applications. We are committed to developing cutting-edge solutions that empower industries and enhance everyday life through the transformative power of electric motor technology.',
    },
    {
      id: 2,
      title: 'VISION',
      content: 'Our vision is to be a global leader in the advancement of power generation, envisioning a future where generators play a pivotal role in providing sustainable and accessible energy solutions. We strive to set new standards for excellence, shaping the landscape of power generation for generations to come.',
    },
    {
        id: 2,
        title: 'CORE VALUES',
        content: 'At our core, we value precision, innovation, and sustainability. Our commitment to quality craftsmanship drives the development of motor control systems that optimize performance and ensure the longevity of electric motors. We uphold environmental responsibility, striving for a harmonious balance between technological progress and ecological consciousness.',
      },
  ];

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
  
    return (
        <Container style={{maxWidth:"90%"}}>
      <div className="about-section">
        <h1>About Us:</h1>
        <Slider {...settings}>
          {AboutPosts.map((post, index) => (
            
            <div key={index} className="about-post">
              <div className="about-content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <a href='/about'>Read More....</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </Container>
    );
  };
  
  export default AboutUs;
  

