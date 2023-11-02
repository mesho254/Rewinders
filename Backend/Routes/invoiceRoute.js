const express = require('express');
const router = express.Router();
const invoiceController = require('../Controllers/invoiceController');

// Route to create a new invoice
router.post('/create', invoiceController.createInvoice);
router.get('/allInvoices', invoiceController.getAllInvoices);
router.patch('/updateStatus/:id', invoiceController.updateReadStatus);

module.exports = router;
