const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  motorMake: String,
  motorModel: String,
  repairDetails: String,
  repairCost: Number,
  date: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
