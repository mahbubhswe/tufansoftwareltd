import React from "react";
import {
  Stack,
  Box,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import aboutUs from "../public/img/aboutUs.png";
import { Wave } from "react-animated-text";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function AboutUs() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Typography
        variant="bold"
        component="h1"
        fontWeight={900}
        textAlign="center"
        mb={8}
      >
        <Wave text="About Us" effect="stretch" effectChange={2} />
      </Typography>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "400px",
              sm: "400px",
              md: "500px",
              lg: "500px",
              xl: "500px",
            },
            width: { xs: "100%", sm: "100%", md: "45%", lg: "45%", xl: "45%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Image
            src={aboutUs}
            alt="aboutUs"
            quality={100}
            data-aos="zoom-in"
            data-aos-offset="50"
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
            height: {
              xs: "450px",
              sm: "45px",
              md: "500px",
              lg: "500px",
              xl: "500px",
            },
            width: { xs: "100%", sm: "100%", md: "55%", lg: "55%", xl: "55%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <List>
          <Fade bottom delay={100} duration={1000}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#21335C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Best Technology Experter"
                  secondary="We are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technology"
                />
              </ListItem>
            </Fade>
            <Fade bottom delay={200} duration={2000}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#21335C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Well Mantained"
                  secondary="We are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technologyWe are waiting to help you to integrete your business with
              technology"
                />
              </ListItem>
            </Fade>
            <Fade bottom delay={300} duration={3000}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#21335C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Best Quality"
                  secondary="We are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technology"
                />
              </ListItem>
            </Fade>
            <Fade bottom delay={400} duration={4000}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#21335C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Fully Commited"
                  secondary="We are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with technologWe are waiting to help you to integrete your business with
              technology"
                />
              </ListItem>
            </Fade>
          </List>
        </Box>
      </Stack>
    </div>
  );
}
