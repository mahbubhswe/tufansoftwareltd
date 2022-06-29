import { Stack, Typography } from "@mui/material";
import React from "react";
import Layout from "../../../../components/Layout";
export default function Index() {
  return (
    <Layout pageTitle={"Web app"}>
      <Stack spacing={3}>
        <Typography align="center" variant="bold" component="h1">
          Technology we use in web development
        </Typography>
        <Typography>
          •Front-end: HTML, CSS, Material UI, JavaScript, React.js, Next.js,
        </Typography>
        <Typography>
          •Back-end: Node.js, Express.js, REST API, Firebase, Mongodb
        </Typography>
        <Typography>
           •Version Control: Git, Github •IDE/Tools: Visual Studio,
        </Typography>
      </Stack>
    </Layout>
  );
}
