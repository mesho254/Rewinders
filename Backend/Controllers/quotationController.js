const Quotation = require('../Models/Quotation');

// Handle creating a new quotation
exports.createQuotation = async (req, res) => {
  try {
    const newQuotation = await Quotation.create(req.body);
    res.status(201).json(newQuotation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quotation' });
  }
};

// Handle fetching all quotations
exports.getAllQuotations = async (req, res) => {
  try {
    const allQuotations = await Quotation.find();
    res.status(200).json(allQuotations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotations' });
  }
};
