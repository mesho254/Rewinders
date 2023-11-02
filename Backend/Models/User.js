const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  gender: String,
  role: {
    type: String,
    enum: ['rewinder', 'admin', 'superadmin'],
    required: true,
  },
});


const User = mongoose.model('user', userSchema);

module.exports = User;
