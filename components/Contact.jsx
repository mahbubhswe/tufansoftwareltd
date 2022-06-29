import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
export default function Index() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [res, setRes] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    setShow(true);
    const { data } = await axios.post("/api/contact", {
      name,
      email,
      phone,
      subject,
      message,
    });
    setShow(false);
    setRes(data);
  };
  return (
    <div className="contactPageBg">
 
 

      <form onSubmit={submitHandler}>
        <Stack
          spacing={3}
          sx={{
            width: { xs: "90%", sm: "80%", md: "50%" },
            margin: "auto",
            padding: "20px",
            borderRadius: "7px",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
          }}
        >
          <Typography
            align="center"
            sx={{ color: "white" }}
            variant="bold"
            component={"h1"}
          >
            Contact Form
          </Typography>

          <Typography
            component="p"
            align="center"
            sx={{ display: res ? "block" : "none", color: "white" }}
          >
            {res}
          </Typography>
          <TextField
            type="text"
            size="small"
            label="Full Name"
            variant="outlined"
            id="Full Name"
            required={true}
            color="secondary"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            size="small"
            label="E-mail"
            variant="outlined"
            required={true}
            color="secondary"
            placeholder="E-mail Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="phone"
            label="Phone"
            variant="outlined"
            size="small"
            required={true}
            multiline
            maxRows={4}
            color="secondary"
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            type="text"
            size="small"
            label="Subject"
            variant="outlined"
            required={true}
            color="secondary"
            placeholder="Full Name"
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            type="text"
            label="Type your message here"
            variant="outlined"
            required={true}
            multiline
            color="secondary"
            placeholder="Type your message here"
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              background: "green",
              "&:hover": {
                background: "black",
              },
            }}
          >
            {show ? <CircularProgress></CircularProgress> : "Send Mail"}
          </Button>
        </Stack>
      </form>
    </div>
  );
}
