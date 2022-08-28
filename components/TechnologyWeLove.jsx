import React from "react";
import { Container, Box, Typography, Grid, Stack, Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade, Slide } from "react-reveal";
import servicesSideBg from "../public/img/ourServicesBg.png";
import technologyItems from "../utils/technologyItems.js";
export default function TechnologyWeLove() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box>
      <div style={{ marginTop: "30px", textAlign: "right" }}>
        <Image src={servicesSideBg} alt="technologySideBg" quality={100} />
      </div>

      <Container sx={{ paddingY: "30px", marginTop: "50px" }}>
        <Typography
          variant="bold"
          component="h1"
          fontWeight={900}
          align="center"
          mb={5}
        >
          Technology We Love
        </Typography>
        <Carousel
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          {technologyItems.map((item) => (
            <div
              style={{
                height: "300px",
                display: "grid",
                placement: "center",
              }}
              key={item.id}
            >
              <Image
                src={item.img}
                alt={item.title}
                quality={100}
                height={80}
                width={80}
              />
              <p align="center">{item.title}</p>
            </div>
          ))}
        </Carousel>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
          sx={{
            backgroundImage: `url("../img/effect2.jpg")`,
            backgroundSize: "cover",
            paddingY: "50px",
          }}
        >
          <Box
            sx={{
              height: "150px",
              width: { xs: "100%", sm: "100%", md: "50%" },
              display: "grid",
              placeContent: "center",
              pl: { xs: "20px", sm: "25px", md: "0px" },
            }}
          >
            <Typography
              variant="bold"
              component="h1"
              fontWeight={900}
              align="center"
              mb={3}
            >
              Web Application
            </Typography>
            <Slide left>
              <Typography>
                <strong>•Front-end:</strong> HTML, CSS, Material UI, JavaScript,
                React.js, Next.js
              </Typography>
              <Typography>
                <strong>•Back-end:</strong> Node.js, Express.js, REST API,
                Firebase, Mongodb
              </Typography>
              <Typography>
                <strong>•Version Control:</strong> Git, Github
              </Typography>
            </Slide>
          </Box>
          <Box
            sx={{
              height: "150px",
              width: { xs: "100%", sm: "100%", md: "50%" },
              display: "grid",
              placeContent: "center",
              pl: { xs: "20px", sm: "25px", md: "0px" },
            }}
          >
            <Typography
              variant="bold"
              component="h1"
              fontWeight={900}
              align="center"
              mb={3}
            >
              Mobile Application
            </Typography>
            <Slide left>
              <Typography>
                <strong>•Front-end:</strong> Flutter, React Native
              </Typography>
              <Typography>
                <strong>•Back-end:</strong> Node.js, Express.js, REST API,
                Firebase, Mongodb
              </Typography>
            </Slide>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
