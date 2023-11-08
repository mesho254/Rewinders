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

  const createMotor = async (req, res) => {
    try {
      const motorData = req.body;
      const newMotor = new Motor(motorData);
      const savedMotor = await newMotor.save();
      res.status(201).json(savedMotor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateMotor = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedMotor = await Motor.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedMotor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getMotor = async (req, res) => {
    try {
      const { id } = req.params;
      const motor = await Motor.findById(id);
      res.status(200).json(motor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getAllMotors = async (req, res) => {
    try {
      const allMotors = await Motor.find({ listingType: { $exists: false } }); // Filters for motors without a listing type
      res.status(200).json(allMotors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteMotor = async (req, res) => {
    try {
      const { id } = req.params;
      await Motor.findByIdAndRemove(id);
      res.status(200).json({ message: 'Motor deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { buyMotor, sellMotor, getBuyMotors, getSellMotors, createMotor,updateMotor,getMotor,deleteMotor, getAllMotors };
