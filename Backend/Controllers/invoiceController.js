// const nodemailer = require('nodemailer');
const Invoice = require('../Models/Invoice');

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerAddress,
      motorMake,
      motorModel,
      repairDetails,
      repairCost
    } = req.body;

    const newInvoice = new Invoice({
      customerName,
      customerEmail,
      customerAddress,
      motorMake,
      motorModel,
      repairDetails,
      repairCost
    });

    const savedInvoice = await newInvoice.save();

    // // Send email to user
    // const transporterToUser = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: 'meshakokelo@gmail.com', // Your email
    //     pass: 'your-password' // Your password
    //   }
    // });

    // const mailOptionsToUser = {
    //   from: 'meshakokelo@gmail.com',
    //   to: customerEmail,
    //   subject: 'Invoice Submission Confirmation',
    //   text: `Dear ${customerName},\n\nYou've successfully submitted an invoice for motor repair. We will process it shortly.\n\nThank you!\n\nBest regards,\nYour Company Name`
    // };

    // transporterToUser.sendMail(mailOptionsToUser, (error, info) => {
    //   if (error) {
    //     console.error('Email sending to user failed:', error);
    //   } else {
    //     console.log('Email sent to user:', info.response);
    //   }
    // });

    // // Send email to admin
    // const transporterToAdmin = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: 'erickomondi@gmail.com', // Admin's email
    //     pass: 'your-password' // Admin's password
    //   }
    // });

    // const mailOptionsToAdmin = {
    //   from: 'meshakokelo@gmail.com',
    //   to: 'erickomondi@example.com', // Replace with your admin's email
    //   subject: 'New Invoice Submission',
    //   text: `An invoice for motor repair has been submitted by ${customerName} (${customerEmail}).\n\nMotor Make: ${motorMake}\nMotor Model: ${motorModel}\nRepair Details: ${repairDetails}\nRepair Cost: ${repairCost}`
    // };

    // transporterToAdmin.sendMail(mailOptionsToAdmin, (error, info) => {
    //   if (error) {
    //     console.error('Email sending to admin failed:', error);
    //   } else {
    //     console.log('Email sent to admin:', info.response);
    //   }
    // });

    res.status(201).json(savedInvoice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllInvoices = async (req, res) => {
    try {
      const invoices = await Invoice.find({});
      res.status(200).json(invoices);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Update invoice read status

 exports.updateReadStatus=  async (req, res) => {
    try {
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        req.params.id,
        { read: req.body.read },
        { new: true }
      );
      res.json(updatedInvoice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }