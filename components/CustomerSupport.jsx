import { Box, Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";
import custoperSupport from "../public/img/custoperSupport.png";
export default function CustomerSupport() {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
      }}
      >
          <Typography
            variant="bold"
            component="h1"
            textAlign="center"
            mt="35px"
          >
            24/h customer support
          </Typography>
      <NextImage
        src={custoperSupport}
        alt="ccustoperSupport"
        quality={100}
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      />
    </Box>
  );
}
