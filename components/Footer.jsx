import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/system";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialMediaLink from "../components/SocialMediaLink";
import RoomIcon from "@mui/icons-material/Room";
export default function Footer() {
  return (
    <div style={{ background: "#D9DCE1", marginTop: "100px" }}>
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
            TuFan Software Ltd
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RoomIcon sx={{ color: "#21335C" }} />
              </ListItemIcon>
              <ListItemText
                primary="Office"
                secondary="51,West Raja Bazar, Dhaka  Bangladesh
                  "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WhatsAppIcon sx={{ color: "#50CC5D" }} />
              </ListItemIcon>
              <ListItemText
                primary="WhatsApp"
                secondary="+880156833756
                  "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon sx={{ color: "#21335C" }} />
              </ListItemIcon>
              <ListItemText
                primary="Mobile"
                secondary="+8801799733805
                  "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon sx={{ color: "#21335C" }} />
              </ListItemIcon>
              <ListItemText
                primary="E-mail"
                secondary="tufansoftwareltd@gmail.com
                  "
              />
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
