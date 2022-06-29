import React, { useEffect } from "react";
import Image from "next/image";
import services from "./../public/img/services.jpg";
import web from "./../public/img/web.png";
import mobile from "./../public/img/mobile.webp";
import game from "./../public/img/game.png";
import ai from "./../public/img/ai.png";
import cse from "./../public/img/cse.png";
import blockchain from "./../public/img/blockchain.jpg";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
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
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Wave } from "react-animated-text";
export default function Services() {
  const router = useRouter();
  const servicesItem = [
    {
      id: 1,
      img: web,
      text: "Web Development.",
      url: "/services/technology/web",
    },
    {
      id: 2,
      img: mobile,
      text: "Mobile App Development",
      url: "/services/technology/mobile",
    },
    {
      id: 3,
      img: game,
      text: "Game Development",
      url: "/services/technology/game",
    },
    {
      id: 4,
      img: ai,
      text: "Machine Learning",
      url: "/services/technology/artificial-intelligence",
    },
    {
      id: 5,
      img: cse,
      text: "Cyber Security",
      url: "/services/technology/cyber-security",
    },
    {
      id: 6,
      img: blockchain,
      text: "blockchain",
      url: "/services/technology/blockchain",
    },
  ];
  useEffect(() => {
    function pageRedirect(url) {
      router.push(url);
    }
  });
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
            <Wave text="Services with creative ideas" effect="stretch" effectChange={2} />
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
            alt="services"
            src={services}
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
          <Wave text="Our Services" effect="stretch" effectChange={2} />
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
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      sx={{
                        background: "green",
                        "&:hover": {
                          background: "black",
                        },
                      }}
                    >
                      <Link href={x.url} passHref>
                        <a style={{ color: "white", textDecoration: "none" }}>
                          Read More
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
