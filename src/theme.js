import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    navBtnColor: {
      main: "#FFFFFF",
    },
    textColor: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
