import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/BlogSection.css'
import { Container } from '@mui/material';

// Sample data for the blog posts 
const blogPosts = [
  {
    title: 'Blog Post 1',
    image: 'https://hvhindustrial.com/images/frontend_images/blogs/1586962774Elektrim-Electric-Motor-20MFM_600px_wbgrd.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 2',
    image: 'https://www.texam.co.uk/wp-content/uploads/2016/06/tc8pit.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 3',
    image: 'https://imaginecare.co.ke/wp-content/uploads/2023/02/PACWELL-GASOLINE-WATER-PUMP-768x768-1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 4',
    image: 'https://amatrol.com/wp-content/uploads/2021/11/85-MT5-CKJ_ElectricMotorControlLS_a_20130829.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 5',
    image: 'https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/ea9dddd3-03bf-48a6-a2e6-9c981fd62cbd/Duplex+Pump+Panels.jpeg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 6',
    image: 'https://www.aeroventfbm.com/wp-content/uploads/2018/09/motor-starter-motor-control-soft-starter-circuit-breaker-1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Blog Post 7',
    image: 'https://pratoerboso.com/1013-large_google/pedrollo-hf-5a-centrifugal-electric-pump-three-phase.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
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
    <Container style={{maxWidth:"98%"}}>
    <div className="blog-section">
      <h1>News and Blogs</h1>
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          
          <div key={index} className="blog-post">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <a href='/blogs'>Read More....</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
};

export default BlogSection;
