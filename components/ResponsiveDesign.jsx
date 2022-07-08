import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import responsive from "../public/img/responsive.gif";
export default function ResponsiveDesign() {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          padding: "10px",
          borderRadius: "7px",
          display: "grid",
          placeContent: "center",
          mt: "100px",
        }}
      >
        <Typography      sx={{
            mb:"30px"
          }} variant="bold" component="h1" textAlign="center">
          Fully Responsive Design
        </Typography>
        <Typography
         
          sx={{
            width: "90%",
            margin: "auto",
            mb:"50px"
          }}
        >
          We are heighly focus on responsive design for best user experience in
          desktop, tab and mobile devise. Optimizing your app for large screens
          improves the overall experience for your users.
        </Typography>
        <Image
          src={responsive}
          alt="responsive"
          quality={100}
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        />
      </Box>
    </Container>
  );
}
