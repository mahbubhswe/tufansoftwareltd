import { CardMedia,CardContent,Grid, Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import bayazid from "./../public/img/bayazid.png";
import bristi from "./../public/img/bristi.png";
import ibrahim from "./../public/img/ibrahim.png";
import tuslima from "./../public/img/tuslima.png";
import mahbub from "./../public/img/mahbub.png";
import nahid from "./../public/img/nahid.png";
import tokon from "./../public/img/tokon.png";
import Adviser from "./Adviser";
export default function OurTechnologyExpert() {
  
  const teamMembers = [
    {
      id: 1,
      img: tokon,
      name: "Monirul Islam Tokon",
      title: "Founder & CEO",
      position: "left",
    },
    {
      id: 2,
      img: mahbub,
      name: "Mahbub Hasan",
      title: "Software Engineer",
      position: "right",
    },

    {
      id: 4,
      img: tuslima,
      name: "Kazi Tuslima Akter",
      title: "Grafic & UIUX Designer",
      position: "left",
    },
    {
      id: 5,
      img: bayazid,
      name: "Bayazid Hasan",
      title: "App Developer",
      position: "right",
    },

    {
      id: 7,
      img: bristi,
      name: "Bristi Rani Sharker",
      title: "Digital Marketer",
      position: "left",
    },
    {
      id: 8,
      img: nahid,
      name: "Nurnobi Nahid",
      title: "Digital Marketer",
      position: "right",
    },
    {
      id: 9,
      img: ibrahim,
      name: "Ibrahim Karim",
      title: "Business Development",
      position: "center",
    },
  ];
  return (
    <Box
      sx={{
        paddingY: "50px",
        mt: "100px",
        borderRadius: "4px",
      }}
      className="profileCardWraper"
   
    >
      <Typography
        align="center"
        pb={5}
        variant="bold"
        component="h1"
        fontWeight={900}
      >
        Our Adviser
      </Typography>
      <Adviser></Adviser>
      <Typography
        align="center"
        pb={5}
        mt={20}
        variant="bold"
        component="h1"
        fontWeight={900}
      >
        Our Team Members
      </Typography>
      <Grid container spacing={5} justifyContent={"center"}>
            {teamMembers.map((x) => {
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
                  <Card >
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
                      <Typography align="center">{x.name}</Typography>
                      <Typography align="center">{x.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
    </Box>
  );
}
