import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Wave } from "react-animated-text";
import Image from "next/image";
import cs from "../public/img/cs.png";
import res from "../public/img/res.png";
import oc from "../public/img/oc.png";
import mapp from "../public/img/mapp.png";
import wapp from "../public/img/wapp.png";
import vrwc from "../public/img/vfwc.jpg";
import tokon from "../public/img/tokon.png";

import mahbub from "../public/img/mahbub.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
import likhon from "../public/img/likhon.png";
import shamim from "../public/img/shamim.png";
import bayazid from "../public/img/bayazid.png";
import tanjim from "../public/img/tanjim.png";
import bristi from "../public/img/bristi.png";
import nahid from "../public/img/nahid.png";

export default function Home() {


  return (
    <>
      <Stack spacing={5} mt={10}>
        <Box
          sx={{
            flexGrow: 1,
            background: "#CB5456",
            display: "grid",
            borderRadius: "7px",
            placeContent: "center",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
          }}
          data-aos="fade-right"
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
              height: "320px",
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
              Why Choice Us
            </Typography>
            <Typography textAlign="center" mt={5}>
              We provide budget friendly services for your business.Also provide
              services with creative ideas what make your business more
              successful and effective. Select your business area and order now
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            padding: "10px",
            borderRadius: "7px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Typography
            variant="bold"
            component="h1"
            textAlign="center"
            py="40px"
          >
            Customer Support 24/7
          </Typography>
          <Typography>
            We are available 24/7 in online to help you.Please feel free to
            contact with us at any time🥰
          </Typography>
          <Image
            src={cs}
            alt="cs"
            quality={100}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={5}
            justifyContent="center"
          >
            <Stack
              sx={{
                flexGrow: 1,
                height: "602px",
                display: "grid",
                placeContent: "center",
                borderRadius: "7px",
                boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
              }}
            >
              <Typography
                variant="bold"
                component="h1"
                textAlign="center"
                mt="35px"
              >
                Courses
              </Typography>
              <Image
                src={oc}
                alt="pic"
                height={400}
                width={400}
                quality={100}
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </Stack>
            <Stack sx={{ flexGrow: 1 }} spacing={5}>
              <Stack
                sx={{
                  height: "280px",
                  display: "grid",
                  placeContent: "center",
                  borderRadius: "7px",
                  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
                }}
                data-aos="flip-down"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Typography
                  variant="bold"
                  component="h1"
                  textAlign="center"
                  mt="35px"
                >
                  Web
                </Typography>
                <Image src={wapp} alt="pic" quality={100} />
              </Stack>
              <Stack
                sx={{
                  height: "280px",
                  display: "grid",
                  placeContent: "center",
                  borderRadius: "7px",
                  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
                }}
                data-aos="flip-up"
                data-aos-offset="0"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Typography
                  variant="bold"
                  component="h1"
                  textAlign="center"
                  mt="35px"
                >
                  Mobile
                </Typography>
                <Image src={mapp} alt="pic" quality={100} />
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="bold"
            component="h1"
            textAlign="center"
            mt="35px"
          >
            <Wave text="Team Members" effect="stretch" effectChange={2} />
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            sx={{ marginTop: "20px" }}
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Grid item width={"250px"}>
              <Image
                src={tokon}
                alt="p"
                width={250}
                height={250}
                quality={100}
                data-aos="fade-up-right"
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Monirul Islam Tokon</Typography>
              <Typography align="center"> Founder & CEO</Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={mahbub}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Mahbub Hasan</Typography>
              <Typography align="center">Software Engineer</Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={likhon}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Mehedi Hasan Likhon</Typography>
              <Typography align="center">Senior Software Engineer</Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={shamim}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Shahadat Hossain Shamim</Typography>
              <Typography align="center">Senior Game Developer</Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={bayazid}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Muhammad Bayazid Hasan</Typography>
              <Typography align="center">App Developer</Typography>
            </Grid>

            <Grid item width={"250px"}>
              <Image
                src={tanjim}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Tanjim Khan</Typography>
              <Typography align="center">Graphic Designer</Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={bristi}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Bristi Rani Sharker </Typography>
              <Typography align="center">Digital Markating </Typography>
            </Grid>
            <Grid item width={"250px"}>
              <Image
                src={nahid}
                alt="p"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Typography align="center">Nurnobi Nahid</Typography>
              <Typography align="center">Digital Markating</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            padding: "10px",
            borderRadius: "7px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Typography
            variant="bold"
            component="h1"
            textAlign="center"
            mt="35px"
          >
            Very Friendly With Customers
          </Typography>
          <Typography>
            We are very friendly with customers. You can share your own opinion
            with us.
          </Typography>
          <Image
            src={vrwc}
            alt="cs"
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
        <Box
          sx={{
            flexGrow: 1,
            padding: "10px",
            borderRadius: "7px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Typography variant="bold" component="h1" textAlign="center">
            Fully Responsive Design
          </Typography>
          <Typography mb="50px">
            We are heighly focus on responsive design for best user experience
            in desktop, tab and mobile devise. Optimizing your app for large
            screens improves the overall experience for your users.
          </Typography>
          <Image
            src={res}
            alt="cs"
            quality={100}
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          />
        </Box>
      </Stack>
      <MessengerCustomerChat
        pageId="101494675943667"
        appId="2102876166584313"
      />
    </>
  );
}
