import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CustomerSupport from "./CustomerSupport";
import UserFriendly from "./UserFriendly";
import servicesSideBg from "../public/img/ourServicesBg.png";
import Image from "next/image";

export default function WhyChoceUs() {
  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Image src={servicesSideBg} alt="technologySideBg" quality={100} />
      </div>

      <Container sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            background: "#CB5456",
            display: "grid",
            borderRadius: "7px",
            placeContent: "center",
            border: "1px solid #ccc",
            //   boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
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
          <div
            style={{
              background: "#FFB30B",
              padding: "10px",
              borderRadius: "7px",
              borderTopLeftRadius: "50%",
            }}
          >
            <Typography
              variant="bold"
              component="h1"
              textAlign="center"
              mt="35px"
            >
              Why Choose Us
            </Typography>
            <Typography
              textAlign="center"
              sx={{ color: "#222222",fontFamily:"sans-serif" }}
              mt={3}
              p={10}
            >
              We have highly skilled engineers with excellent technical
              knowledge and experience in using latest software standards,
              tools, platforms, frameworks and technologies and we invest
              continuously in training and education, to be able to respond to
              any new technology challenges and demands from our clients.
              <br />
              <br /> We provide budget friendly services for your business.Also
              provide services with creative ideas what make your business more
              successful and effective.
            </Typography>

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
          </div>
        </Box>
      </Container>
    </>
  );
}
