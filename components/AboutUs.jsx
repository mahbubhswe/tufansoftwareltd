import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Wave } from "react-animated-text";

export default function AboutUs() {
  return (
    <Container>
      <Box
        sx={{
          marginTop: "120px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "4px",
          py: "80px",
        }}
      >
        <Typography variant="bold" component="h1" textAlign="center" mb={5}>
          <Wave text="About Us" effect="stretch" effectChange={2} />
        </Typography>
        <Typography component="p" px={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          odio ex quis dicta unde sapiente vel perspiciatis. Id, perferendis,
          odio sit esse quo saepe aut mollitia, eos impedit ratione assumenda.
        </Typography>
      </Box>
    </Container>
  );
}
