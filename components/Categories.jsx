import React, { useEffect } from "react";
import Image from "next/image";
import category from "./../public/img/categories.png";
import ce from "./../public/img/ce.gif";
import cel from "./../public/img/cel.gif";
import ccs from "./../public/img/ccs.gif";
import cnp from "./../public/img/cnp.gif";
import cb from "./../public/img/cb.gif";
import cta from "./../public/img/cta.gif";
import csm from "./../public/img/csm.gif";
import cfs from "./../public/img/cfs.gif";
import chms from "./../public/img/chms.gif";
import chms2 from "./../public/img/chms2.gif";
import cgs from "./../public/img/cgs.gif";
import ctk from "./../public/img/ctk.gif";
import css from "./../public/img/css.gif";
import onDimand from "./../public/img/onDimand.gif";

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
export default function Categories() {
  const router = useRouter();
  const servicesItem = [
    {
      id: 1,
      img: ce,
      text: "E-Commerce System",
      url: "/services/technology/web",
    },
    {
      id: 2,
      img: cel,
      text: "E-Learning System",
      url: "/services/technology/mobile",
    },
    {
      id: 3,
      img: ccs,
      text: "Courier Services System",
      url: "/services/technology/game",
    },
    {
      id: 4,
      img: cnp,
      text: "Online News Paper System",
      url: "/services/technology/artificial-intelligence",
    },
    {
      id: 5,
      img: cta,
      text: "Travel Agency System",
      url: "/services/technology/cyber-security",
    },
    {
      id: 6,
      img: cb,
      text: "Bloging Website",
      url: "/services/technology/blockchain",
    },
    {
      id: 7,
      img: csm,
      text: "School Management",
      url: "/services/technology/blockchain",
    },
    {
      id: 8,
      img: cfs,
      text: "Furniture Shop",
      url: "/services/technology/blockchain",
    },
    {
      id: 9,
      img: chms,
      text: "Hospital Managment ",
      url: "/services/technology/blockchain",
    },
    {
      id: 10,
      img: chms2,
      text: "Hotel Managment Syestem",
      url: "/services/technology/blockchain",
    },
    {
      id: 11,
      img: cgs,
      text: "Garments Website",
      url: "/services/technology/blockchain",
    },
    {
      id: 12,
      img: ctk,
      text: "Tali Khata",
      url: "/services/technology/blockchain",
    },

    {
      id: 13,
      img: css,
      text: "Super Shop",
      url: "/services/technology/blockchain",
    },
    {
      id: 14,
      img: onDimand,
      text: "On Dimand",
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
            <Wave text="Select your business area with discussion" effect="stretch" effectChange={2} />
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
            alt="category"
            src={category}
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
          <Wave
            text="Our Software Categories"
            effect="stretch"
            effectChange={2}
          />
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
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}
