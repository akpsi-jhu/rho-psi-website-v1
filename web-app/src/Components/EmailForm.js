import React, { useState } from "react";
import {TextField, Button, Snackbar, Alert} from "@mui/material";

import "../styles/Form.css"
import { Stack } from "@mui/system";






export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    // Validate the form data
    setError({});
    let hasError = false;
    if (!firstName) {
      setError(prevError => {
        return { ...prevError, name: "Last name is required" };
      });
      hasError = true;
    }
    if (!lastName) {
        setError(prevError => {
          return { ...prevError, name: "First name is required" };
        });
        hasError = true;
      }
    if (!email) {
      setError(prevError => {
        return { ...prevError, email: "Email is required" };
      });
      hasError = true;
    }
    if (!subject) {
        setError(prevError => {
          return { ...prevError, subject: "Subject is required" };
        });
        hasError = true;
      }
    if (!message) {
      setError(prevError => {
        return { ...prevError, message: "Message is required" };
      });
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Send the email
    //using a simple mailto link 
    const emailLink = `mailto:skyngthowhing@gmail.com?subject=Contact Form Submission&body=Name: ${firstName} ${lastName}{%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = emailLink;

    // Reset the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <form noValidate autoComplete="off" className="form">
        <Stack direction="row" width="100%" gap={3} justifyContent="space-between" alignItems="center">
      <TextField  
        id="first name"
        label="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        margin="normal"
        helperText={error.name}
        error={Boolean(error.name)}
        sx = {{
            width: "100%"
        }}
        />
    <TextField
        id="last name"
        label="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        margin="normal"
        helperText={error.name}
        error={Boolean(error.name)}
        sx = {{
            width: "100%"
        }}
        />
                </Stack>

        <TextField
        id="email"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        helperText={error.email}
        error={Boolean(error.email)}
        />
        <TextField
            id="subject"
            label="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            margin="normal"
            helperText={error.subject}
            error={Boolean(error.subject)}
        />
        <TextField
        id="message"
        label="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        margin="normal"
        helperText={error.message}
        error={Boolean(error.message)}
        multiline
        rows={4}
        />

        <Button  sx={{ marginTop: 5, width: '100%', fontSize: 20, padding: 1, backgroundColor: '#0C406F', borderRadius: 85, boxShadow: 3 }}

             variant="contained"
             onClick={handleSubmit}
           >
        Send
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        Email sent successfully!
        </Alert>
        </Snackbar>
        </form>
        );
        }