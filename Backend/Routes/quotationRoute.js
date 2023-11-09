const express = require('express');
const router = express.Router();
const quotationController = require('../Controllers/quotationController');

// Route for creating a new quotation
router.post('/create', quotationController.createQuotation);

// Route for fetching all quotations
router.get('/all', quotationController.getAllQuotations);

module.exports = router;
