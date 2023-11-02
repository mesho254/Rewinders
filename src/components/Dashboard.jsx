import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
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
import ResponsiveAppBar from './AppBar.jsx';

let pictures = [
  IstockImage1,
 IstockImage2,IstockImage3,IstockImages4,IstockImage5,IstockImage6,IstockImage7,IstockImage8,IstockImage9,IstockImage10,IstockImage11,IstockImage12,IstockImage13,IstockImage14,IstockImage15,

 ];

export default function Dashboard() {    
    const imageStyle = {
      maxWidth: '95vw', // Ensure the image doesn't exceed its container's width
      maxHeight: '70vh', // Ensure the image doesn't exceed its container's height
      borderRadius:'13px',
      marginTop: '20px',
    };

     return (
      <div>
        <ResponsiveAppBar/>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={true}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {pictures.map((image, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} style={imageStyle}/>
            </div>
          ))}
        </Slide>
      </div>
    );
};

