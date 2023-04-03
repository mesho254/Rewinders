import React, { useState} from 'react';
import  Spinner  from './spinner.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "../context/AuthContext"
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import "../styles/Dashboard.css"
import IstockImage1 from '../assets/images/istockphoto-527614583-1024x1024.jpg'
import IstockImage2 from '../assets/images/istockphoto-471204065-1024x1024.jpg'
import IstockImage3 from '../assets/images/istockphoto-959141970-1024x1024.jpg'
import IstockImages4 from '../assets/images/istockphoto-959146982-1024x1024.jpg'
import IstockImage5 from '../assets/images/istockphoto-501392396-1024x1024.jpg'
import IstockImage6 from '../assets/images/istockphoto-1417007340-1024x1024.jpg'
import IstockImage7 from '../assets/images/istockphoto-1285236817-1024x1024.jpg'
import IstockImage8 from '../assets/images/istockphoto-472645932-1024x1024.jpg'
import IstockImage9 from '../assets/images/istockphoto-501361032-1024x1024.jpg'
import IstockImage10 from '../assets/images/istockphoto-687839650-1024x1024.jpg'
import IstockImage11 from '../assets/images/istockphoto-95769783-1024x1024.jpg'
import IstockImage12 from '../assets/images/istockphoto-959146722-1024x1024.jpg'
import IstockImage13 from '../assets/images/motor.jpg'
import IstockImage14 from '../assets/images/motor1.jpg'
import IstockImage15 from '../assets/images/spare-part-engine-water-pump-isolated-white.jpg'

let pictures = [
  // eslint-disable-next-line
  {id:1, url:IstockImage1},
  // eslint-disable-next-line
  {id:2, url:IstockImage2},
  // eslint-disable-next-line
  {id:3, url:IstockImage3},
  // eslint-disable-next-line
  {id:4, url:IstockImages4},
  // eslint-disable-next-line
  {id:5, url:IstockImage5},
  // eslint-disable-next-line
  {id:6, url:IstockImage6},
  // eslint-disable-next-line
  {id:7, url:IstockImage7},
  // eslint-disable-next-line
  {id:8, url:IstockImage8},
  // eslint-disable-next-line
  {id:9, url:IstockImage9},
  // eslint-disable-next-line
  {id:10, url:IstockImage10},
  // eslint-disable-next-line
  {id:11, url:IstockImage11},
  // eslint-disable-next-line
  {id:12, url:IstockImage12},
  // eslint-disable-next-line
  {id:13, url:IstockImage13},
  // eslint-disable-next-line
  {id:14, url:IstockImage14},
  // eslint-disable-next-line
  {id:15, url:IstockImage15},

 ];

export default function Dashboard() {    
    const {currentUser, loading} = useAuth();

      const [currentIndex, setCurrentIndex] = useState(0);
      const [isOpen, setIsOpen] = useState(false);
      const handleClick = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
      }
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
         autoplay: true,
         autoplaySpeed: 8000,
        cssEase:"linear",
        afterChange: (index) => setCurrentIndex(index),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              swipeToSlide: true,
              slidesToScroll: 1
            }
          }
        ]
      };

     console.log(currentUser)

  return loading ? (
    <Spinner/>
  ) :( 
    <div>
      <Navigation/>
      {!isOpen ? (
        
        <div className='pictures'>
            <Slider {...settings}>
          {pictures.map((picture, index) => (
            <motion.img
            className={'image'}
              key={picture.id}
              src={picture.url}
              whileHover={{ scale: 1.001 }}
              onClick={() => handleClick(index)}
            />
          ))}
           </Slider>
        </div>
       
       
      ) : (
        <div className='btn'>
          <motion.button 
          className={'btn1'}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(false)}
          >
            Close
          </motion.button>
          <motion.button 
          className={'btn2'}
            whileHover={{ scale: 1.1 }}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            Previous
          </motion.button>
          <motion.img 
          className={'image1'}
            src={pictures[currentIndex].url}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          />
           <p className='words'>{currentIndex + 1} of {pictures.length}</p>
          <motion.button 
          className={'btn3'}
            whileHover={{ scale: 1.1 }}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === pictures.length - 1}
          >
            Next
          </motion.button>
        </div>
      )}
    </div>  
  )
};

