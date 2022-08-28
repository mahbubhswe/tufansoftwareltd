import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import shamim from "./../public/img//shamim.png";
import likhon from "./../public/img/likhon.png";
export default function Adviser() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={10}
      sx={{paddingY:"20px"}}
    >
      <Typography>
        <Image src={shamim} alt="shamim" width={300} height={300} />
        <Typography align="center" variant="bold" mt={3} component={"h2"}>Shahadat Hossain Shamim</Typography>
        {/* <Typography align="center" sx={{ color: "gray" }}>
          Associate Software Engineer
        </Typography> */}
      </Typography>
      <Typography>
        <Image src={likhon} alt="likhon" width={300} height={300} />
        <Typography align="center" variant="bold" mt={3} component={"h2"}>Mehedi Hasan Likhon</Typography>
        {/* <Typography align="center" sx={{ color: "gray" }}>
          Associate Software Engineer
        </Typography> */}
      </Typography>
    </Stack>
  );
}
