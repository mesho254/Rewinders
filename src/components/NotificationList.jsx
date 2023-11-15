import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import { Container } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import Footer from './Footer';


function NotificationList({ onCountChange }) {
  const [quotations, setQuotations] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [openQuotationDialog, setOpenQuotationDialog] = useState(false);
  const [openInvoiceDialog, setOpenInvoiceDialog] = useState(false);

  const handleOpenQuotationDialog = (quotation) => {
    setSelectedQuotation(quotation);
    setOpenQuotationDialog(true);
  };

  const handleOpenInvoiceDialog = (invoice) => {
    setSelectedInvoice(invoice);
    setOpenInvoiceDialog(true);
  };

  const handleCloseQuotationDialog = () => {
    setSelectedQuotation(null);
    setOpenQuotationDialog(false);
  };

  const handleCloseInvoiceDialog = () => {
    setSelectedInvoice(null);
    setOpenInvoiceDialog(false);
  };

  useEffect(() => {
    const fetchQuotationsAndInvoices = async () => {
      try {
        const quotationsResponse = await axios.get('https://rewinders-vgdr.vercel.app/api/quotation/all');
        const invoicesResponse = await axios.get('https://rewinders-vgdr.vercel.app/api/invoices/allInvoices');
        // Sort quotations and invoices by date in descending order
        const sortedQuotations = quotationsResponse.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const sortedInvoices = invoicesResponse.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setQuotations(sortedQuotations);
        setInvoices(sortedInvoices);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuotationsAndInvoices();
  }, []);

  return (
    <div>
      <ResponsiveAppBar/>
      <Container style={{marginBottom:"100px"}}>
      <Typography variant="h3" style={{ cursor: 'pointer', marginTop:"20px" }} gutterBottom align='center'>
        Notifications
      </Typography>

       {/* Quotations Table */}
       <TableContainer component={Paper}>
       <Typography variant="h5" style={{ cursor: 'pointer', marginTop:"20px" }} gutterBottom align='center'>
        Quotations List
      </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotations.map((quotation) => (
              <TableRow key={quotation._id}>
                <TableCell>{quotation.customerName}</TableCell>
                <TableCell>{new Date(quotation.date).toDateString()}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenQuotationDialog(quotation)}>View Quotation</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Invoices Table */}
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Typography variant="h5" style={{ cursor: 'pointer', marginTop:"20px" }} gutterBottom align='center'>
        Invoice Lists
      </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice._id}>
                <TableCell>{invoice.customerName}</TableCell>
                <TableCell>{new Date(invoice.date).toDateString()}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenInvoiceDialog(invoice)}>View Invoice</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Quotation Dialog */}
      <Dialog open={openQuotationDialog} onClose={handleCloseQuotationDialog}>
        <DialogTitle>{selectedQuotation ? selectedQuotation.customerName : 'Quotation Details'}</DialogTitle>
        <DialogContent>
          {selectedQuotation && (
            <div>
              <Typography>{`Customer Email: ${selectedQuotation.customerEmail}`}</Typography>
              <Typography>{`Customer Address: ${selectedQuotation.customerAddress}`}</Typography>
              <Typography>{`Message: ${selectedQuotation.message}`}</Typography>
              <Typography>{`Date: ${selectedQuotation.date}`}</Typography>
              {/* Add more details as needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQuotationDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Invoice Dialog */}
      <Dialog open={openInvoiceDialog} onClose={handleCloseInvoiceDialog}>
        <DialogTitle>{selectedInvoice ? selectedInvoice.customerName : 'Invoice Details'}</DialogTitle>
        <DialogContent>
          {selectedInvoice && (
            <div>
              <Typography>{`Customer Email: ${selectedInvoice.customerEmail}`}</Typography>
              <Typography>{`Customer Address: ${selectedInvoice.customerAddress}`}</Typography>
              <Typography>{`Motor Make: ${selectedInvoice.motorMake}`}</Typography>
              <Typography>{`Motor Model: ${selectedInvoice.motorModel}`}</Typography>
              <Typography>{`Repair Details: ${selectedInvoice.repairDetails}`}</Typography>
              <Typography>{`Repair Cost: $${selectedInvoice.repairCost}`}</Typography>
              <Typography>{`Date: ${selectedInvoice.date}`}</Typography>
              {/* Add more details as needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInvoiceDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      </Container>
      <Footer/>
    </div>
  );
}

export default NotificationList;
