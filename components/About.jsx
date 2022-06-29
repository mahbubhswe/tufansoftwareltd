import React, { useEffect } from "react";
import Image from "next/image";
import about from "./../public/img/about.png";
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
export default function Services() {
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
            <Wave
              text="Grow business with creative idea"
              effect="stretch"
              effectChange={2}
            />
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
            alt="about"
            src={about}
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
      <Box
        sx={{
          marginTop: "100px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <Typography variant="bold" component="h1" textAlign="center" mb={5}>
          <Wave text="About Us" effect="stretch" effectChange={2} />
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
        </Typography>
      </Box>
    </>
  );
}
