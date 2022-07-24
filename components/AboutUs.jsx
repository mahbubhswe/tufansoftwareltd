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
    <div className="bgGd" style={{ marginTop: "100px" }}>
      <Typography
        variant="bold"
        component="h1"
        fontWeight={900}
        textAlign="center"
        mb={8}
        pt={10}
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
            height:"500px",
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
                  secondary="Our developers, designers, testers and project managers know their craft inside out. What is more, we all speak English, so you can discuss details with every person working on the project."
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
                  secondary="We provide best mantained support for your application and improves. We provide life time support for your business success"
                />
              </ListItem>
            </Fade>
            <Fade bottom delay={300} duration={3000}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#21335C" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Excellent price-quality ratio"
                  secondary="Despite the excellent quality, the costs are lower than the Bangladesh average. And, on top of that, we provide you with detailed lists of expenses, so you know what exactly you are paying for."
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
                  secondary="Most of our business comes from referals. We will work hard to get yet another satisfied customer and we hope that you will stay with us for years – like many of our clients do.
                  "
                />
              </ListItem>
            </Fade>
          </List>
        </Box>
      </Stack>
    </div>
  );
}
