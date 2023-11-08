import React from 'react';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import { Button, Card, CardContent, Container } from '@mui/material';
import Image from '../assets/images/WhatsApp Image 2023-11-07 at 08.33.05_a1edb51b.jpg';
import { useNavigate } from 'react-router-dom';

function Services() {
const navigate = useNavigate()

const handleBuy = () =>{
  navigate('/buyMotor')
}

const handleSell = () =>{
  navigate('/sellMotor')
}

const handleRepair = ()=> {
  navigate('/repair-invoice')
}

  const cardStyle = {
    marginBottom: '20px',
    maxWidth: '345px',
  };

  return (
    <div>
      <ResponsiveAppBar />
      <Container style={{ marginBottom: '100px', marginTop: '20px', maxWidth: '90%' }}>
        <Container style={{ border: '2px solid black', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={Image}
              alt="Company Services"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2em' }}>
            <p>
              Welcome to our motor company! We specialize in providing a wide range of motors for various needs.
              Whether you are looking to buy, sell, or repair a motor, we have you covered with top-notch services.
            </p>
          </div>
        </Container>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
          <Card style={cardStyle}>
            <CardContent>
              <h2>Buy Motor</h2>
              <p>
                Explore our diverse collection of high-quality motors. We offer a wide selection to cater to your specific needs.
              </p>
              <Button variant='contained' onClick={handleBuy}>Buy Motor</Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <h2>Sell Motor</h2>
              <p>
                Looking to sell your motor? We provide a platform to showcase and sell your motors effortlessly.
              </p>
              <Button variant='contained' onClick={handleSell}>Sell Motor</Button>
            </CardContent>
          </Card>

          <Card style={cardStyle}>
            <CardContent>
              <h2>Motor Repair</h2>
              <p>
                Is your motor in need of repair? Our expert technicians are here to bring your motor back to life.
              </p>
              <Button variant='contained' onClick={handleRepair}>Ask For Motor Repair</Button>
            </CardContent>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
