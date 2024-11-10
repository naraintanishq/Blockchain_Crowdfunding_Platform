
"use client";

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Can be 'success', 'error', etc.

  const handleSend = () => {
    setError('');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !message) {
      setError("Both email and message are required.");
      setSnackbarMessage("Both email and message are required.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // If validation passes, show success message
    setSnackbarMessage("Your message has been sent successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

    // Reset fields after successful send
    setEmail('');
    setMessage('');
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{
        height:['auto', 'auto', '100vh'],
        display:'flex',
        justifyContent:'center',
        paddingY: 15
    }}>
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight={700} letterSpacing={2}>
        Contact Us
      </Typography>
      
      <Box display="flex" alignItems="flex-end" mb={2}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!email && error}
          helperText={!email && error && "Email is required"}
        />
      </Box>

      <Box display="flex" alignItems="flex-end" mb={2}>
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!message && error}
          helperText={!message && error && "Message is required"}
        />
      </Box>

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>

      {/* Snackbar for displaying success or error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
    </Box>
  );
};

export default ContactUs;
