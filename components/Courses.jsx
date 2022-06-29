import React, { useEffect } from "react";
import Image from "next/image";
import courses from "./../public/img/courses.png";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Wave } from "react-animated-text";
import course1 from "./../public/img/course1.png";
import { FadeLoader } from "react-spinners";
export default function Services() {
  const servicesItem = [
    {
      id: 1,
      img: course1,
      text: "MERN-stack full-ecommerce",
      price: 3000,
      url: "/courses/mern-stack-full-ecommerce",
    },
  ];
  return (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "400px",
            display: "grid",
            placeContent: "center",
          }}
          component="div"
        >
          <Typography variant="bold" component="h1" textAlign="center" mb={5}>
            <Wave text="Our online courses" effect="stretch" effectChange={2} />
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "400px",
            display: "grid",
            placeContent: "center",
          }}
          component="div"
        >
          <Image
            alt="courses"
            src={courses}
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
      <Stack marginY={30}>
        <Typography variant="bold" component="h1" textAlign="center" mb={5}>
          <Wave text="Course List" effect="stretch" effectChange={2} />
        </Typography>
        <Grid container spacing={2} justifyContent={"center"}>
          {servicesItem.map((x) => {
            return (
              <Grid
                key={x.id}
                item
                sx={{
                  width: "250px",
                }}
                data-aos="fade-up-right"
                data-aos-offset="-50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card sx={{ border: "1px solid #01E0D0" }}>
                  <CardMedia sx={{ padding: "10px" }}>
                    <Image
                      alt="services"
                      src={x.img}
                      width={250}
                      height={200}
                      quality={100}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography>{x.text}</Typography>
                    <Typography>Price: {x.price} tk only</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      sx={{
                        background: "#FFB518",
                        "&:hover": {
                          background: "#CD3359",
                        },
                      }}
                    >
                      <Link href={x.url} passHref>
                        <a style={{ color: "white", textDecoration: "none" }}>
                          Details
                        </a>
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
    
      </Stack>
    </>
  );
}
