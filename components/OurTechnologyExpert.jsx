import { Container, Stack, Typography, Box } from "@mui/material";
import { ParallaxHover } from "react-parallax-hover";
import Image from "next/image";
import React, { useState } from "react";
import bayazid from "./../public/img/bayazid.png";
import bristi from "./../public/img/bristi.png";
import ibrahim from "./../public/img/ibrahim.png";
import tuslima from "./../public/img/tuslima.png";
import mahbub from "./../public/img/mahbub.png";
import nahid from "./../public/img/nahid.png";
import shamim from "./../public/img//shamim.png";
import likhon from "./../public/img/likhon.png";
import tokon from "./../public/img/tokon.png";
import { Fade } from "react-reveal";
export default function OurTechnologyExpert() {
  const [profile, setProfile] = useState({
    id: 1,
    img: tokon,
    name: "Monirul Islam Tokon",
    title: "Founder & CEO",
  });
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
      id: 3,
      img: likhon,
      name: "Mehedi Hasan Likhon",
      title: "Adviser",
      position: "center",
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
      name: "Muhammad Bayazid Hasan",
      title: "App Developer",
      position: "right",
    },

    {
      id: 6,
      img: shamim,
      name: "Shahadat Hossain Shamim",
      title: "Adviser",
      position: "center",
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
      name: "Ibrahim Karim Jony",
      title: "Business Development & marketing Expert",
      position: "center",
    },
  ];
  return (
    <Container
      sx={{
        paddingY: "50px",
        mt: "100px",
        borderRadius: "4px",
      }}
      className="profileCardWraper"
      data-aos="zoom-in"
      data-aos-offset="-50"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Typography
        align="center"
        pb={5}
        variant="bold"
        component="h1"
        fontWeight={900}
      >
        Our Team Members
      </Typography>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        spacing={2}
      >
        <Box
          sx={{
            height: "500px",
            padding: "20px",
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
          }}
        >
          {teamMembers.map((item) => {
            return (
              <div key={item.id} style={{ textAlign: item.position }}>
                <Image
                  style={{
                    borderRadius: "50%",
                  }}
                  src={item.img}
                  alt="Profile"
                  height={50}
                  width={50}
                  quality={100}
                  onClick={() => setProfile(item)}
                />
              </div>
            );
          })}
        </Box>

        <Box
          className="profileCard"
          sx={{
            height: "500px",
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
          }}
          data-aos="fade-up"
          data-aos-offset="-50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div
            style={{
              height: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Image
              className="bounceEffect"
              style={{ borderRadius: "50%" }}
              src={profile.img}
              alt="Profile"
              height={150}
              width={150}
              quality={100}
            />
            <br />
            <Fade left>
              <span>{profile.name}</span>
            </Fade>
            <Fade left>
              <span>{profile.title}</span>
            </Fade>
          </div>
        </Box>
      </Stack>
    </Container>
  );
}
