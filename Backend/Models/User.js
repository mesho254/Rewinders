const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

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
    default: 'rewinder',
    required: true,
  },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model('user', userSchema);

module.exports = User;
