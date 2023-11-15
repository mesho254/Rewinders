import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/BlogSection.css'
import { Container } from '@mui/material';

// Sample data for the blog posts 
const blogPosts = [
  {
    title: 'Electric Motors',
    image: 'https://hvhindustrial.com/images/frontend_images/blogs/1586962774Elektrim-Electric-Motor-20MFM_600px_wbgrd.jpg',
    content: 'In this blog post, explore the fascinating world of electric motors. Learn about their diverse applications, from industrial machinery to everyday appliances. Discover how these essential devices convert electrical energy into mechanical motion, driving innovation across various industries.',
  },
  {
    title: 'Power Generators',
    image: 'https://www.texam.co.uk/wp-content/uploads/2016/06/tc8pit.jpg',
    content: 'Uncover the essential role of power generators in ensuring a reliable energy supply. Delve into the mechanics of electricity generation and the various types of generators used to meet diverse power needs. Gain insights into the importance of generators during emergencies and their contribution to sustainable energy solutions.',
  },
  {
    title: 'Gasoline Water Pumps',
    image: 'https://imaginecare.co.ke/wp-content/uploads/2023/02/PACWELL-GASOLINE-WATER-PUMP-768x768-1.jpg',
    content: 'Explore the efficiency and versatility of gasoline-powered water pumps. From agricultural irrigation to construction site dewatering, learn how these pumps play a crucial role in managing water resources. Discover the key features and applications that make gasoline water pumps essential tools in various industries.',
  },
  {
    title: 'Motor Controls',
    image: 'https://amatrol.com/wp-content/uploads/2021/11/85-MT5-CKJ_ElectricMotorControlLS_a_20130829.png',
    content: 'Dive into the world of motor controls and electrical systems. Gain insights into the principles of motor control circuits and their applications in regulating the speed, direction, and protection of electric motors. Explore the latest technologies shaping the field of motor controls and their impact on industrial automation.',
  },
  {
    title: 'Duplex Pump Panels',
    image: 'https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/ea9dddd3-03bf-48a6-a2e6-9c981fd62cbd/Duplex+Pump+Panels.jpeg',
    content: 'Delve into the world of duplex pump panels, essential components in fluid management systems. Learn how these panels enhance pump efficiency, reliability, and control in various applications, from wastewater treatment plants to commercial buildings. Explore the features that make duplex pump panels integral to fluid handling systems.',
  },
  {
    title: 'Motor Starters and Soft Starters',
    image: 'https://www.aeroventfbm.com/wp-content/uploads/2018/09/motor-starter-motor-control-soft-starter-circuit-breaker-1.jpg',
    content: 'Understand the importance of motor starters and soft starters in controlling the initiation and operation of electric motors. Explore how these devices protect motors from damage and optimize their performance. Gain insights into the different types of starters and their applications across industries.',
  },
  {
    title: 'Centrifugal Electric Pumps',
    image: 'https://pratoerboso.com/1013-large_google/pedrollo-hf-5a-centrifugal-electric-pump-three-phase.jpg',
    content: 'Explore the efficiency and versatility of centrifugal electric pumps in fluid transportation. From agricultural irrigation to industrial processes, learn about the applications that make these pumps essential. Discover the design principles and features that contribute to the reliability and performance of centrifugal electric pumps.',
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
    autoplay: true,
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
