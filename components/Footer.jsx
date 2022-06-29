import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialMediaLink from "../components/SocialMediaLink";
export default function Footer() {
  return (
    <div style={{ background: "#E3E6E8", marginTop: "100px" }}>
      <Divider></Divider>
      
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        paddingX="50px"
        mt={8}
      >
        <Box sx={{ flexGrow: 1, display: "grid", placeContent: "center" }}>
          <SocialMediaLink></SocialMediaLink>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "grid",
            placeContent: "center",
            marginTop: { xs: "35px" },
          }}
        >
          <Typography variant="bold" component="h2">
            Tufan Software Ltd
          </Typography>
          <List>
            <ListItem>
              <ListItemText>Home Office</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Work Virtually</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Typography align="center" paddingY={"25px"} component={"h3"}>
        Copyright © 2022 tufansoftwareltd.com
      </Typography>
    </div>
  );
}
