import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";
export default function SocialMediaLink() {
  return (
    <Box>
      <Typography variant="bold" component="h2">
        Follow us
      </Typography>
      <Stack direction="row" spacing={2} mt={2}>
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://www.facebook.com/tufansoftwareltd" />
        <SocialIcon url="https://youtube.com/" />
      </Stack>
    </Box>
  );
}
