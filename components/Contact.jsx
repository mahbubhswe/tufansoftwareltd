import React from "react";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import contact from "../public/img/contact.svg";
import Image from "next/image";
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
    <Stack
      direction={{
        xs: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
    >
      <Box spacing={5}
        sx={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <Image
          src={contact}
          alt="contact"
          width={250}
          height={250}
          quality={100}
          data-aos="zoom-in"
          data-aos-offset="-50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <form onSubmit={submitHandler}>
          <Stack
            spacing={1}
            sx={{
              padding: "10px",
              borderRadius: "7px",
              boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
            }}
          >
            

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
      </Box>
    </Stack>
  );
}
