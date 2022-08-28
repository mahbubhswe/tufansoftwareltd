import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NextImage from "next/image";
import contact from "../public/img/contact.svg";
export default function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const submitHanler = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Ok");
    try {
    } catch (error) {
      alert("Ok");
    }
  };
  return (
    <Container>
      <Paper sx={{ padding: "30px" }} elevation={2}>
        <Stack onSubmit={submitHanler} spacing={3} component="form">
          <NextImage src={contact} alt="logo" width={120} height={120} />
          <Typography align="center" variant="bold" component="h1">
            Contact
          </Typography>
          <TextField
            label="Full name"
            type="text"
            placeholder="Full name"
            size="small"
            required
            color="secondary"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            label="Email address"
            type="email"
            placeholder="E-mail address"
            size="small"
            required
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label="Phone"
            type="tel"
            placeholder="Phone"
            size="small"
            required
            color="secondary"
            onChange={(e) => setPhone(e.target.value)}
          ></TextField>
          <TextField
            label="Message"
            type="text"
            placeholder="Message"
            size="small"
            required
            color="secondary"
            multiline
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
          ></TextField>

          <Box style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disableFocusRipple={true}
            >
              Send mail
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
