import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
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
        <Box
          sx={{
            backgroundImage: `url("../img/effect2.jpg")`,
            backgroundSize: "cover",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              mb: "30px",
            }}
            variant="bold"
            component="h1"
            textAlign="center"
          >
            Fully Responsive Design
          </Typography>
          <Fade left>
            <Typography
              sx={{
                width: "90%",
                margin: "auto",
                mb: "50px",
              }}
            >
              We are heighly focus on responsive design for best user experience
              in desktop, tab and mobile devise. Optimizing your app for large
              screens improves the overall experience for your users. Responsive
              design allows your website content to flow freely across all
              screen resolutions and sizes, and renders it to look great on all
              devices. It also makes it unnecessary to maintain different
              versions of your website for mobile and desktop and saves you
              time, resources and efforts.
            </Typography>
          </Fade>
          <Typography
            sx={{
              width: "90%",
              margin: "auto",
              mb: "20px",
            }}
            variant="bold"
            component="h4"
          >
            What Is Responsive Web Design?
          </Typography>
          <Fade bottom delay={400} duration={4000}>
            <Typography
              sx={{
                width: "90%",
                margin: "auto",
                mb: "50px",
              }}
            >
              Responsive Web design is the approach that suggests that design
              and development should respond to the user’s behavior and
              environment based on screen size, platform and orientation.
            </Typography>
          </Fade>
        </Box>
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
