// controllers/motorController.js

const Motor = require('../Models/Motor');

const buyMotor = async (req, res) => {
  try {
    // Retrieve data from the request body
    const {
      yourName,
      phoneNumber,
      email,
      make,
      model,
      year,
      type,
      voltage,
      horsepower,
      speed,
      coolingSystem,
      weight,
      dimensions,
      condition,
      phase,
      frequency,
      // Other fields related to buying
    } = req.body;

    // Create a new motor instance for buying
    const newMotor = new Motor({
      yourName,
      phoneNumber,
      email,
      make,
      model,
      year,
      type,
      voltage,
      horsepower,
      speed,
      coolingSystem,
      weight,
      dimensions,
      condition,
      phase,
      frequency,
      // Assign other fields for buying
    });

    newMotor.listingType = 'buy';

    // Save the motor to the database
    const savedMotor = await newMotor.save();

    res.status(201).json(savedMotor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sellMotor = async (req, res) => {
  try {
    // Retrieve data from the request body
    const {
      yourName,
      phoneNumber,
      email,
      make,
      model,
      year,
      type,
      voltage,
      horsepower,
      speed,
      coolingSystem,
      weight,
      dimensions,
      condition,
      phase,
      frequency,
      // Other fields related to selling
    } = req.body;

    // Create a new motor instance for selling
    const newMotor = new Motor({
      yourName,
      phoneNumber,
      email,
      make,
      model,
      year,
      type,
      voltage,
      horsepower,
      speed,
      coolingSystem,
      weight,
      dimensions,
      condition,
      phase,
      frequency,
      // Assign other fields for selling
    });

    newMotor.listingType = 'sell';

    // Save the motor to the database
    const savedMotor = await newMotor.save();

    res.status(201).json(savedMotor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBuyMotors = async (req, res) => {
    try {
      const buyMotors = await Motor.find({ listingType: 'buy' }); // Retrieves all motors listed as 'buy'
      res.status(200).json(buyMotors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getSellMotors = async (req, res) => {
    try {
      const sellMotors = await Motor.find({ listingType: 'sell' }); // Retrieves all motors listed as 'sell'
      res.status(200).json(sellMotors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { buyMotor, sellMotor, getBuyMotors, getSellMotors };
