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
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useRouter } from "next/router";
import Slider from "./Slider";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const navItems = [
    {
      id: 1,
      link: "/",
      title: "HOME",
    },
    {
      id: 2,
      link: "/services",
      title: "SERVICES",
    },

    {
      id: 3,
      link: "/categories",
      title: "CATEGORIES",
    },
    {
      id: 4,
      link: "/courses",
      title: "COURSES",
    },
    {
      id: 5,
      link: "/about",
      title: "ABOUT",
    },
    {
      id: 6,
      link: "/contact",
      title: "CONTACT",
    },
  ];

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{ boxShadow: "none", paddingX: "10px" }}
      >
        <Toolbar color="primary">
          <Typography
            variant="bold"
            component={"span"}
            sx={{
              flexGrow: 1,
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
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                onClick={() => router.push(item.link)}
                color="navBtnColor"
                size="large"
              >
                {item.title}
              </Button>
            ))}
          </Stack>
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
      <div style={{ backgroundColor: "green" }} id="myBar"></div>
      {router.asPath === "/" ? <Slider></Slider> : null}

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
                <ListItemButton onClick={() => router.push(item.link)}>
                  <ListItemText> {item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Drawer>
    </>
  );
}
