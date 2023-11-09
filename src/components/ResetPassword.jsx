import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyFieldErrors, setEmptyFieldErrors] = useState({
    email: false,
    password: false,
  });
  const param = useParams();
  const url = `https://rewinders-vgdr.vercel.app/api/user/password-reset/${param.id}/${param.token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    const newEmptyFieldErrors = {
      password: !password,
    };

    setEmptyFieldErrors(newEmptyFieldErrors);

    if (Object.values(newEmptyFieldErrors).some((fieldError) => fieldError)) {
      setError('Please fill in all required fields.');
      return;
    }
    e.preventDefault();
    setIsLoading(true)
    try {
      const { data } = await axios.post(url, { password });
      setMsg(data.message);
      setError("");
      setIsLoading(false)
      handleSnackbarOpen();
      window.location = "/";
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
    }
  };

  return (
    <Fragment>
      {validUrl ? (
        <Container maxWidth="sm" style={{justifyContent:"center", justifyItems:"center", alignContent:"center", marginTop: "200px"}}>
          <Paper elevation={3}>
            <Box p={3}>
              <form onSubmit={handleSubmit}>
                <Typography variant="h4" gutterBottom>
                  Add New Password
                </Typography>
                <TextField
                type="password"
                label="Password (Should contain at least one uppercase and character"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setEmptyFieldErrors({ ...emptyFieldErrors, password: false });
                }}
                margin="normal"
                required
                error={emptyFieldErrors.password}
              />
                {error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                  </Alert>
                )}
                {msg && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    {msg}
                  </Alert>
                )}
                 {isLoading ? ( // Show loading indicator when loading
              <CircularProgress style={{ marginTop: '16px' }} />
            ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{marginTop:"30px"}}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>)}
              </form>
            </Box>
          </Paper>
        </Container>
      ) : (
        <Typography variant="h4"><CircularProgress/></Typography>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={error ? "error" : "success"}>
          {error || msg}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default PasswordReset;
