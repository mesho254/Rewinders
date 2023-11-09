import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Container, CircularProgress } from '@mui/material';
import Footer from '../Footer';
import ResponsiveAppBar from '../AppBar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Descriptions for different types of motors
const motorDescriptions = {
    electricMotor: `Electric motors are devices that convert electrical energy into mechanical energy. They're commonly used in various applications such as industrial machinery, household appliances, and automotive systems.`,
    combustionMotor: `Combustion motors, such as internal combustion engines, operate by burning fuel within a combustion chamber to generate mechanical energy. These motors are prevalent in vehicles, power generation, and various heavy machinery.`,
    hydraulicMotor: `Hydraulic motors utilize fluid power to generate mechanical energy. They're commonly used in hydraulic systems for heavy equipment, manufacturing machinery, and construction vehicles.`,
    pneumaticMotor: `Pneumatic motors use compressed air to produce mechanical motion. These motors are often found in pneumatic tools, HVAC systems, and some industrial applications.`,
    ACmotor: `AC motors, or alternating current motors, are powered by an alternating current. They come in various types such as induction motors, synchronous motors, and are widely used in different industries.`,
    DCmotor: `DC motors, or direct current motors, operate using a direct current. They're commonly found in battery-operated systems, electric vehicles, and small appliances.`,
    servoMotor: `Servo motors are rotary actuators that allow for precise control of angular position. They're used in robotics, CNC machinery, and various automated systems.`,
    linearMotor: `Linear motors create motion in a straight line. They're used in applications requiring linear motion, such as high-speed trains, conveyor systems, and precision positioning.`,
    stepperMotor: `Stepper motors divide a full rotation into a series of steps, allowing for precise control over position and speed. They're used in 3D printers, CNC machines, and automation.`,
    brushlessMotor: `Brushless motors are synchronous motors powered by direct current. They provide high efficiency and are commonly used in drones, electric vehicles, and computer cooling fans.`,
    inductionMotor: `Induction motors are AC motors where the rotating magnetic field induces current in the rotor. They're widely used in industrial machinery, pumps, and fans.`,
    gearMotor: `Gear motors integrate a gear train with a motor to deliver high torque. They're used in applications requiring high torque at low speeds, like conveyors and lifting equipment.`,
    universalMotor: `Universal motors can run on either AC or DC power. They're used in portable power tools, vacuum cleaners, and kitchen appliances due to their high power-to-weight ratio.`,
    submersibleMotor: `Submersible motors are designed to operate underwater. They're used in pumps for water supply, sewage treatment, and offshore drilling applications.`,
    hermeticMotor: `Hermetic motors are completely sealed to prevent the entry of external elements. They're used in refrigeration compressors, air conditioners, and medical devices.`,
    corelessMotor: `Coreless motors have a coil without an iron core, providing better efficiency and higher power density. They're used in drones, RC models, and medical devices.`,
    slotlessMotor: `Slotless motors lack iron cores and slots, reducing eddy currents and improving efficiency. They're used in high-performance applications like medical devices and robotics.`,
    spindleMotor: `Spindle motors are high-speed motors used in machining tools like lathes, milling machines, and CNC routers for precise and fast rotational motion.`,
    tractionMotor: `Traction motors provide propulsion for electric or hybrid vehicles. They're used in electric cars, trains, and other transportation systems.`,
    linearInductionMotor: `Linear induction motors produce linear motion without the need for rotary-to-linear conversion. They're used in maglev trains, conveyor systems, and amusement park rides.`,
  };
  

const SellMotorForm = () => {
  const [sellFormData, setSellFormData] = useState({
    yourName: '',
    phoneNumber: '',
    email: '',
    make: '',
    model: '',
    year: '',
    type: '',
    voltage: '',
    horsepower: '',
    speed: '',
    coolingSystem: '',
    weight: '',
    dimensions: '',
    condition: '',
    phase: '',
    frequency: '',
  });

  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState({
    yourName: '',
    phoneNumber: '',
    email: '',
    make: '',
    model: '',
    year: '',
    type: '',
    voltage: '',
    horsepower: '',
    speed: '',
    coolingSystem: '',
    weight: '',
    dimensions: '',
    condition: '',
    phase: '',
    frequency: '',
  });

  const handleScrollToForm = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSellFormChange = (event) => {
    const { name, value } = event.target;
    setSellFormData({
      ...sellFormData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    });
  };

  const handleSellSubmit = async (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    setIsLoading(true);

    let errorDetected = false;
    const newErrors = { ...errors };
    Object.keys(sellFormData).forEach((key) => {
      if (!sellFormData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        errorDetected = true;
      }
    });

    if (errorDetected) {
      setErrors(newErrors);
      setIsLoading(false);
    } else {
      try {
        const response = await axios.post('https://rewinders-vgdr.vercel.app/api/motor/sell', sellFormData);

        if (response.status === 201) {
          toast.success('Motor data submitted successfully!');
          setIsLoading(false);
          // Clear form fields after success
          setSellFormData({
            yourName: '',
            phoneNumber: '',
            email: '',
            make: '',
            model: '',
            year: '',
            type: '',
            voltage: '',
            horsepower: '',
            speed: '',
            coolingSystem: '',
            weight: '',
            dimensions: '',
            condition: '',
            phase: '',
            frequency: '',
          });
          setErrors({
            yourName: '',
            phoneNumber: '',
            email: '',
            make: '',
            model: '',
            year: '',
            type: '',
            voltage: '',
            horsepower: '',
            speed: '',
            coolingSystem: '',
            weight: '',
            dimensions: '',
            condition: '',
            phase: '',
            frequency: '',
          });
        } else {
          toast.error('Failed to submit motor data');
          setIsLoading(false);
        }
      } catch (error) {
        toast.error('Error occurred while submitting data');
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container style={{ padding: '20px', marginBottom: '100px' }}>
        <Card>
          <CardContent>
            <Container style={{marginBottom:"50px", borderBottom:"2px solid"}}>
            <div style={{display:"flex", justifyContent:"space-between", borderBottom:"2px solid"}}>
            <h3>Types of Motors</h3>
           <Button variant="contained" onClick={handleScrollToForm} style={{height:"50px"}}>
              Sell
            </Button>
            </div>
            <p style={{fontWeight:"bold"}}>Electric Motors: </p>
            <p>{motorDescriptions.electricMotor}</p>
            <p style={{fontWeight:"bold"}}>Combustion Motors: </p>
            <p>{motorDescriptions.combustionMotor}</p>
            <p style={{fontWeight:"bold"}}>Hydraulic Motors:</p>
            <p> {motorDescriptions.hydraulicMotor}</p>
            <p style={{fontWeight:"bold"}}>Pneumatic Motors: </p>
            <p>{motorDescriptions.pneumaticMotor}</p>
            <p style={{fontWeight:"bold"}}>AC Motors:</p>
            <p> {motorDescriptions.ACmotor}</p>
            <p style={{fontWeight:"bold"}}>DC Motors:</p>
            <p> {motorDescriptions.DCmotor}</p>
            <p style={{fontWeight:"bold"}}>Servo Motors:</p>
            <p> {motorDescriptions.servoMotor}</p>
            <p style={{fontWeight:"bold"}}>Linear Motors:</p>
            <p> {motorDescriptions.linearMotor}</p>
            <p style={{fontWeight:"bold"}}>Stepper Motors: </p>
            <p>{motorDescriptions.stepperMotor}</p>
            <p style={{fontWeight:"bold"}}>Brushless Motors:</p>
            <p> {motorDescriptions.brushlessMotor}</p>
            <p style={{fontWeight:"bold"}}>Induction Motors:</p>
            <p> {motorDescriptions.inductionMotor}</p>
            <p style={{fontWeight:"bold"}}>Gear Motors:</p>
            <p> {motorDescriptions.gearMotor}</p>
            <p style={{fontWeight:"bold"}}>Universal Motors:</p>
            <p> {motorDescriptions.universalMotor}</p>
            <p style={{fontWeight:"bold"}}>Submersible Motors: </p>
            <p>{motorDescriptions.submersibleMotor}</p>
            <p style={{fontWeight:"bold"}}>Hermetic Motors: </p>
            <p>{motorDescriptions.hermeticMotor}</p>
            <p style={{fontWeight:"bold"}}>Coreless Motors: </p>
            <p>{motorDescriptions.corelessMotor}</p>
            <p style={{fontWeight:"bold"}}>Slotless Motors:</p>
            <p> {motorDescriptions.slotlessMotor}</p>
            <p style={{fontWeight:"bold"}}>Spindle Motors:</p>
            <p> {motorDescriptions.spindleMotor}</p>
            <p style={{fontWeight:"bold"}}>Traction Motors: </p>
            <p>{motorDescriptions.tractionMotor}</p>
            <p style={{fontWeight:"bold"}}>Linear Induction Motors:</p>
            <p> {motorDescriptions.linearInductionMotor}</p>
            </Container>
          <h1>Sell Your Motor</h1>
            <form onSubmit={handleSellSubmit} id="formSection">
            <TextField
              name="yourName"
              label="Your Name"
              value={sellFormData.yourName}
              onChange={handleSellFormChange}
              helperText={errors.yourName}
              error={Boolean(errors.yourName)}
              style={{ marginTop: '10px' }}
              fullWidth
            />
              <TextField
                name="phoneNumber"
                label="Phone Number"
                value={sellFormData.phoneNumber}
                onChange={handleSellFormChange}
                helperText={errors.phoneNumber}
                error={Boolean(errors.phoneNumber)}
                style={{marginTop:"10px"}}
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                value={sellFormData.email}
                onChange={handleSellFormChange}
                helperText={errors.email}
                error={Boolean(errors.email)}
                style={{marginTop:"10px"}}
                fullWidth
              />
              <TextField
                name="make"
                label="Make"
                value={sellFormData.make}
                onChange={handleSellFormChange}
                helperText={errors.make}
                error={Boolean(errors.make)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="model"
                label="Model"
                value={sellFormData.model}
                onChange={handleSellFormChange}
                helperText={errors.model}
                error={Boolean(errors.model)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="year"
                label="Year"
                value={sellFormData.year}
                onChange={handleSellFormChange}
                helperText={errors.year}
                error={Boolean(errors.year)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="type"
                label="Type"
                value={sellFormData.type}
                onChange={handleSellFormChange}
                helperText={errors.type}
                error={Boolean(errors.type)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="voltage"
                label="Voltage"
                value={sellFormData.voltage}
                onChange={handleSellFormChange}
                helperText={errors.voltage}
                error={Boolean(errors.voltage)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="horsepower"
                label="Horsepower (HP)"
                value={sellFormData.horsepower}
                onChange={handleSellFormChange}
                helperText={errors.horsepower}
                error={Boolean(errors.horsepower)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="speed"
                label="Speed (RPM)"
                value={sellFormData.speed}
                onChange={handleSellFormChange}
                helperText={errors.speed}
                error={Boolean(errors.speed)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="coolingSystem"
                label="Cooling System"
                value={sellFormData.coolingSystem}
                onChange={handleSellFormChange}
                helperText={errors.coolingSystem}
                error={Boolean(errors.coolingSystem)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="weight"
                label="Weight"
                value={sellFormData.weight}
                onChange={handleSellFormChange}
                helperText={errors.weight}
                error={Boolean(errors.weight)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="dimensions"
                label="Dimensions"
                value={sellFormData.dimensions}
                onChange={handleSellFormChange}
                helperText={errors.dimensions}
                error={Boolean(errors.dimensions)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="condition"
                label="Condition"
                value={sellFormData.condition}
                onChange={handleSellFormChange}
                helperText={errors.condition}
                error={Boolean(errors.condition)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="phase"
                label="Phase"
                value={sellFormData.phase}
                onChange={handleSellFormChange}
                helperText={errors.phase}
                error={Boolean(errors.phase)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                <TextField
                name="frequency"
                label="Frequency"
                value={sellFormData.frequency}
                onChange={handleSellFormChange}
                helperText={errors.frequency}
                error={Boolean(errors.frequency)}
                style={{marginTop:"10px"}}
                fullWidth
                />
                 {isLoading ? ( // Show loading indicator when loading
              <CircularProgress style={{ marginTop: '16px' }} />
            ) : (
                <Button type="submit" variant="contained" fullWidth  style={{marginTop:"10px"}}>
                Sell Motor
                </Button>)}
            </form>
          </CardContent>
        </Card>
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
};

export default SellMotorForm;
