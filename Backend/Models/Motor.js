const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
  yourName: String,
  phoneNumber: Number,
  email: String,
  motorMake: String,
  motorModel: String,
  year: Number,
  type: String,
  voltage: String,
  horsepower: String,
  speed: String,
  coolingSystem: String,
  weight: String,
  dimensions: String,
  condition: String,
  phase: String,
  frequency: String,
  listingType: {
    type: String,
    enum: ['buy', 'sell'] // Assuming the listing type can only be 'buy' or 'sell'
  }
});

const Motor = mongoose.model('Motor', motorSchema);

module.exports = Motor;
