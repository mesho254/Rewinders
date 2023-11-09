const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  customerAddress: String,
  date: {
    type: Date,
    default: Date.now
  },
});

const BuyInvoice = mongoose.model('BuyInvoice', invoiceSchema);

module.exports = BuyInvoice;
