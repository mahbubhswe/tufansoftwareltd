import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import AfterNav from "../components/AfterNav";
export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Walcome to Tufan Software Ltd"}</title>
      </Head>
      <Navbar></Navbar>
      <AfterNav />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
