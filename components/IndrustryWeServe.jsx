import React, { useEffect } from "react";
import Image from "next/image";
import technologySideBg from "../public/img/technologySideBg.png";
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
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  Box
} from "@mui/material";
import { Wave } from "react-animated-text";
export default function IndrustryWeServe() {
  const servicesItem = [
    {
      id: 1,
      img: ce,
      text: "E-Commerce",
      url: "/services/technology/web",
    },
    {
      id: 2,
      img: cel,
      text: "E-Learning",
      url: "/services/technology/mobile",
    },
    {
      id: 3,
      img: ccs,
      text: "Courier Services",
      url: "/services/technology/game",
    },
    {
      id: 4,
      img: cnp,
      text: "Online News",
      url: "/services/technology/artificial-intelligence",
    },
    {
      id: 5,
      img: cta,
      text: "Travel Agency",
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
      text: "School ERP",
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
      text: "Hospital ERP ",
      url: "/services/technology/blockchain",
    },
    {
      id: 10,
      img: chms2,
      text: "Hotel Managment",
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
      text: "On Demand",
      url: "/services/technology/blockchain",
    },
  ];
  return (
    <Box    sx={{
      backgroundImage: `url("../img/indrustyrWeServeBG.svg")`,
      backgroundSize: "cover",
      paddingTop: "20px",
    }}>
      <div style={{ marginTop: "30px", textAlign: "right" }}>
        <Image src={technologySideBg} alt="technologySideBg" quality={100} />
      </div>
      <Container>
        <Stack mt={20}>
          <Typography variant="bold" component="h1" textAlign="center" mb={5}>
            <Wave text="Indrustry We Serve" effect="stretch" effectChange={2} />
          </Typography>
          <Grid container spacing={1} justifyContent={"center"}>
            {servicesItem.map((x) => {
              return (
                <Grid
                  key={x.id}
                  item
                  sx={{
                    width: "180px",
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
                        width={180}
                        height={150}
                        quality={100}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography align="center">{x.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
