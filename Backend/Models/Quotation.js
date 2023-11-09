const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  },
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;
