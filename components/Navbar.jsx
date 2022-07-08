import React, { useState } from "react";
import {
  AppBar,
  Button,
  Typography,
  Stack,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NextLink from "next/link";
import afterHeadPic from "../public/img/afterHeadPic.webp";
import { useRouter } from "next/router";
import Image from "next/image";
import Contact from "../components/Contact";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const router = useRouter();
  const navItems = [
    {
      id: 1,
      link: "/",
      title: "HOME",
    },
    {
      id: 2,
      link: "#our-services",
      title: "SERVICES",
    },

    {
      id: 3,
      link: "#software-categories",
      title: "CATEGORIES",
    },
    {
      id: 4,
      link: "#about-us",
      title: "About US",
    },
  ];

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{ boxShadow: "none", paddingX: "10px", paddingY: "12px" }}
      >
        <Toolbar color="primary">
          <Typography
            variant="bold"
            component={"span"}
            sx={{
              flexGrow: { xs: 1, sm: 1, md: 0.5, lg: 0.5, xl: 0.5 },
              fontSize: "21px",
              textShadow: "1px 2px",
            }}
            color="black"
          >
            <span style={{ color: "#FDAF0F" }}>TUFAN</span>SOFTWARELTD
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <NextLink href={item.link} key={item.id}>
                <Button component="a" color="navBtnColor" size="large">
                  {item.title}
                </Button>
              </NextLink>
            ))}
            <NextLink href={"/portfolio"} passHref>
              <Button
                component="a"
                target="_blank"
                color="navBtnColor"
                size="large"
              >
                Portfolio
              </Button>
            </NextLink>
          </Stack>
          <Button
            size="learge"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#ffffff",
              background: "#CB5455",
              "&:hover": {
                background: "#DB4040",
              },
            }}
            onClick={() => setShowContact(true)}
          >
            Contact
          </Button>
          <IconButton
            onClick={() => setShow(true)}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuOutlinedIcon
              sx={{ fontSize: 35 }}
              color="navBtnColor"
            ></MenuOutlinedIcon>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={show} onClose={() => setShow(false)}>
        <Stack sx={{ padding: "20px", width: "100vw" }} spacing={1}>
          <Button
            onClick={() => setShow(false)}
            type="button"
            sx={{
              width: "5px",
              marginLeft: "auto",
              color: "black",
              border: "1px dotted #ccc",
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.id}
                color="navBarBtn"
                sx={{ fontSize: "18px", fontWeight: "900" }}
              >
                <NextLink href={item.link} key={item.id}>
                  <Button component="a" color="navBtnColor" size="large">
                    {item.title}
                  </Button>
                </NextLink>
              </ListItem>
            ))}
            <ListItem>
              <NextLink href={"/portfolio"} passHref>
                <Button
                  component="a"
                  target="_blank"
                  color="navBtnColor"
                  size="large"
                >
                  Portfolio
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <Button
                size="learge"
                sx={{
                  color: "#ffffff",
                  background: "#CB5455",
                  "&:hover": {
                    background: "#DB4040",
                  },
                }}
                onClick={() => setShowContact(true)}
              >
                Contact
              </Button>
            </ListItem>
          </List>

          <Image src={afterHeadPic} alt="afterHeadPic" quality={100} />
        </Stack>
      </Drawer>
      <Dialog
        scroll="body"
        open={showContact}
        maxWidth="sm"
        onClose={() => setShowContact(!showContact)}
      >
        <DialogTitle align="center" fontSize={25}>
          We will answer your mail within 24H
          <Button
            onClick={() => setShowContact(false)}
            type="button"
            sx={{
              width: "3px",
              marginLeft: "auto",
              color: "black",
              border: "1px dotted #ccc",
              background: "red",
              marginLeft: "5px",
              "&:hover": {
                background: "red",
              },
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <Contact />
        </DialogContent>
      </Dialog>
    </>
  );
}
