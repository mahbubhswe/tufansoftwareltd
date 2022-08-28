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
        <SocialIcon url="https://www.linkedin.com/company/tufansoftware/" />
        <SocialIcon url="https://www.facebook.com/tufansoftware" />
        <SocialIcon url="https://mobile.twitter.com/TufanSoft" />
        <SocialIcon url="https://www.youtube.com/channel/UCGlE-rxSo_8v2cclbcn3Zmw" />
      </Stack>
    </Box>
  );
}
