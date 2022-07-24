import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import afterHeadPic from "../public/img/afterHeadPic.gif";
export default function AfterNav() {
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
          paddingLeft: "10px",
        }}
      >
        <Fade left>
          <Typography
            variant="bold"
            component="h1"
            sx={{
              fontSize: {
                xs: "50px",
                sm: "50px",
                md: "60px",
                lg: "60px",
                xl: "60px",
              },
              color: "#20303C",
            }}
          >
            Grow your business{" "}
            <span style={{ color: "#EFB701" }}>with technology</span>
          </Typography>
        </Fade>
        <Fade bottom delay={500} duration={5000}>
          <Typography
            variant="bold"
            fontSize={25}
            fontFamily="georgia"
            sx={{ color: "#001E3C" }}
          >
            We are here to help you to integrete your business with
            technology
          </Typography>
        </Fade>
      </Box>
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
          src={afterHeadPic}
          alt="afterHeadPic"
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
    </Stack>
  );
}
