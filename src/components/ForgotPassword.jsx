import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Snackbar, Alert, CircularProgress, Container, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyFieldErrors, setEmptyFieldErrors] = useState({
    email: false,
  });

	const handleSubmit = async (e) => {
    const newEmptyFieldErrors = {
      email: !email,
    };

    setEmptyFieldErrors(newEmptyFieldErrors);

    if (Object.values(newEmptyFieldErrors).some((fieldError) => fieldError)) {
      setError('Please fill in all required fields.');
      return;
    }
		e.preventDefault();
    setIsLoading(true)
		try {
			const url = `https://rewinders-vgdr.vercel.app/api/user/forgot-password1`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
      setIsLoading(false)
			handleSnackbarOpen();
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
				handleSnackbarOpen();
			}
			setIsLoading(false)
		}

	};

	const handleSnackbarOpen = () => {
		setOpenSnackbar(true);
	};

	const handleSnackbarClose = () => {
		setOpenSnackbar(false);
	};

	return (
		<div>
      <Container style={{justifyContent:"center", justifyItems:"center", alignContent:"center", marginTop: "200px"}}>
      <Paper elevation={3}>
            <Box p={3}>
			<form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
				<h1>Forgot Password</h1>
        <TextField
             type="email"
             label="Email"
             fullWidth
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
               setEmptyFieldErrors({ ...emptyFieldErrors, email: false });
             }}
             margin="normal"
             required
             error={emptyFieldErrors.email}
           />
         {isLoading ? ( // Show loading indicator when loading
              <CircularProgress style={{ marginTop: '16px' }} />
            ) : (
				<Button type="submit" variant="contained" color="primary" style={{marginTop:"30px"}}>
					Submit
				</Button>)}
        <Link to='/login'>Back to Login</Link>
			</form>
      </Box>
      </Paper>
      </Container>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleSnackbarClose}
			>
				<Alert onClose={handleSnackbarClose} severity={error ? "error" : "success"}>
					{error || msg}
				</Alert>
			</Snackbar>
      
		</div>
	);
};

export default ForgotPassword;
