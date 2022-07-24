import React from "react";
import Image from "next/image";
import servicesSideBg from "../public/img/ourServicesBg.png";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { Wave } from "react-animated-text";
import web from "./../public/img/web.png";
import mobile from "./../public/img/mobile.webp";
import game from "./../public/img/game.png";
export default function OurServices() {
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
      text: "Mobile Development",
      url: "/services/technology/mobile",
    },
    {
      id: 3,
      img: game,
      text: "Game Development",
      url: "/services/technology/game",
    },
  ];
  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Image src={servicesSideBg} alt="technologySideBg" quality={100} />
      </div>

      <Container
        sx={{
          paddingY: "60px",
          border: "3px dashed gray",
          borderRadius: "4px",
          margin: "auto"
        }}
      >
        <Stack>
          <Typography  variant="bold" component="h1" textAlign="center" mb={8}>
            <Wave text="Service We Provide" effect="stretch" effectChange={2} />
          </Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            {servicesItem.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  sx={{
                    width: "250px",
                  }}
                  data-aos="zoom-in"
                  data-aos-offset="-50"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                >
                  <Card>
                    <CardMedia sx={{ padding: "10px" }}>
                      <Image
                        alt="services"
                        src={item.img}
                        width={250}
                        height={200}
                        quality={100}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography align="center">{item.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
