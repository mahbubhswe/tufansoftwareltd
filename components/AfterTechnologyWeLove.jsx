import { Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import laptop from "../public/img/laptop.png";
export default function AfterTechnologyWeLove() {
  return (
    <Container
      sx={{
        backgroundImage: `url("../img/laptopBg.gif")`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="bgContainer"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Image src={laptop} alt="laptop" quality={100} />
        <span className="textCentered">We are ready</span>
      </div>
    </Container>
  );
}
