import React, { useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sp1 from "/public/img/sp1.jpg";
import sp2 from "/public/img/sp2.jpg";
import sp3 from "/public/img/sp3.jpg";
import { Zoom, Fade } from "react-reveal";
import { Typography } from "@mui/material";
export default function Slider() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <Zoom>
        <div className="sliderContainer">
          <Image
            src={sp3}
            alt="sp1"
            quality={100}
            height={600}
            layout="responsive"
          />
          <div className="centered">
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "30px", md: "50px" },
                color: "#FFFFFF",
                fontWeight: { xs: 70, sm: 700, md: 900 },
              }}
            >
              Select your business area with discussion
            </Typography>
          </div>
        </div>
      </Zoom>
      <div className="sliderContainer">
        <Image
          src={sp1}
          alt="sp1"
          quality={100}
          height={600}
          layout="responsive"
        />
        <div className="centered">
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "50px" },
              color: "#FFFFFF",
              fontWeight: { xs: 70, sm: 700, md: 900 },
            }}
          >
            Grow your business with creative idea
          </Typography>
        </div>
      </div>

      <div className="sliderContainer">
        <Image
          src={sp2}
          alt="sp1"
          quality={100}
          height={600}
          layout="responsive"
        />
        <div className="centered">
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "50px" },
              color: "#FFFFFF",
              fontWeight: { xs: 70, sm: 700, md: 900 },
            }}
          >
            Best customer support available in 24/7
          </Typography>
        </div>
      </div>
    </Carousel>
  );
}
