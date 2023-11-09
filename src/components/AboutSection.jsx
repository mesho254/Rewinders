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
      content: 'This is the content of the first blog post...',
    },
    {
      id: 2,
      title: 'VISION',
      content: 'This is the content of the second blog post...',
    },
    {
        id: 2,
        title: 'CORE VALUES',
        content: 'This is the content of the second blog post...',
      },
      {
        id: 2,
        title: 'SCHOOL MOTTO',
        content: 'This is the content of the second blog post...',
      },
    // Add more blog posts as needed
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
  

