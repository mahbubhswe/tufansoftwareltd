import {
  Box,
  Container,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomerSupport from "./CustomerSupport";
import UserFriendly from "./UserFriendly";
import servicesSideBg from "../public/img/ourServicesBg.png";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function WhyChoceUs() {
  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Image src={servicesSideBg} alt="technologySideBg" quality={100} />
      </div>

      <Box
        sx={{
          display: "grid",
          borderRadius: "7px",
          placeContent: "center",
          //   boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
        }}
      >
        <div
          style={{
            padding: "0px 100px",
          }}
        >
          <Typography variant="bold" component="h1" textAlign="center">
            Why Choose Us
          </Typography>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "#21335C" }} />
            </ListItemIcon>
            <ListItemText
              primary=""
              secondary="We have highly skilled engineers with excellent technical
                  knowledge and experience in using latest software standards,
                  tools, platforms, frameworks and technologies and we invest
                  continuously in training and education, to be able to respond to
                  any new technology challenges and demands from our clients."
            />
          </ListItem>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
        >
          <UserFriendly />
          <CustomerSupport />
        </Stack>
      </Box>
    </>
  );
}
