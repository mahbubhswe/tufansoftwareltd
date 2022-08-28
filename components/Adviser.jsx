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
        spacing={15}
      >
        <Typography>
          <Image src={shamim} alt="shamim" width={300} height={300} />
        </Typography>
        <Typography>
          <Image src={likhon} alt="likhon" width={270} height={270} />
        </Typography>
      </Stack>
   
  );
}
