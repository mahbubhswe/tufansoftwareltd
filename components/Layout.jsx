import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Slider from "./Slider";
import { useRouter } from "next/router";
export default function Layout({ pageTitle, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Walcome to Tufan Software Ltd"}</title>
      </Head>
      <Navbar></Navbar>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
}
