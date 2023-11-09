import React from 'react';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Button, Card, CardContent, Container, Typography, Grid } from '@mui/material';
import Image from '../assets/images/WhatsApp Image 2023-11-07 at 08.33.05_a1edb51b.jpg';
import Image1 from '../assets/images/control1.jpg'
import Image2 from '../assets/images/control2.jpg'
import Image3 from '../assets/images/control3.jpg'
import Image4 from '../assets/images/control4.jpg'
import Image5 from '../assets/images/control5.jpg'
import Image6 from '../assets/images/control6.jpg'
import Image7 from '../assets/images/generator1.png'
import Image8 from '../assets/images/generator2.webp'
import Image9 from '../assets/images/generator3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ServicesSection.css'

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

  const motorControls = [
    {
      image: Image1,
      description: 'Description for motor control 1',
    },
    {
      image: Image2,
      description: 'Description for motor control 2',
    },
    {
      image: Image3,
      description: 'Description for motor control 3',
    },
    {
      image: Image4,
      description: 'Description for motor control 3',
    },
    {
      image: Image5,
      description: 'Description for motor control 3',
    },
    {
      image: Image6,
      description: 'Description for motor control 3',
    },
  ];

  const generators = [
    {
      image: Image7,
      description: 'Description for generator 1',
    },
    {
      image: Image8,
      description: 'Description for generator 2',
    },
    {
      image: Image9,
      description: 'Description for generator 3',
    },
  ];

  return (
    <div>
      <ResponsiveAppBar />
      <Container style={{ marginBottom: '100px', marginTop: '20px', maxWidth: '98%' }}>
        <Container style={{  padding: '40px', marginBottom:"20px", maxWidth:"98%", border:"2px solid", borderRadius:"8px" }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={Image}
              alt="Company Services"
              style={{ width: '90%', height: '800px', borderRadius:"8px" }}
              className='image'
            />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.5em' }}>
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
          <Link to='/viewMotors'>
          <Button color='secondary' variant='contained' style={{marginLeft:"10px"}}>View All Available Motors for Sale</Button>
          </Link>
        </div>

          <Container style={{marginTop:"50px", borderTop:"4px solid", maxWidth:"90%"}}>
          <Typography variant='h2' style={{margin:"50px 0"}}>We also Make Controls</Typography>
          <Grid container spacing={3}>
            {motorControls.map((control, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <img src={control.image} alt={`Motor Control ${index}`} style={{ maxWidth: '100%' }} />
                  <CardContent>
                    <Typography>{control.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Link to='/quotationRequest'>
          <Button color='secondary' variant='contained' style={{marginTop:"30px"}}>Ask For control Quotation</Button>
          </Link>
        </Container>

        <Container style={{marginTop:"50px", borderTop:"4px solid", maxWidth:"90%"}}>
          <Typography variant='h2' style={{margin:"50px 0"}}>We also Repair Generators</Typography>
          <Grid container spacing={3}>
            {generators.map((generator, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card style={{height:"600px"}}>
                  <img src={generator.image} alt={`Motor Control ${index}`} style={{ maxWidth: '100%' }} />
                  <CardContent>
                    <Typography>{generator.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Link to='/generatorInvoice'>
          <Button color='secondary' variant='contained' style={{marginTop:"30px"}}>Ask For Generator Repair</Button>
          </Link>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
