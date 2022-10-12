import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "IranSanseDN",
    },
  },
  palette: {
    dark: {
      varyLight: "rgba(0, 0, 0, 0.70)",
      light: "rgba(0, 0, 0, 0.80)",
      main: "rgba(0, 0, 0, 0.90)",
    },
    light: {
      light: "rgba(255, 255, 255, 0.90)",
      main: "#FFFFFF",
    },
    danger: {
      main: "#ff264a",
    },
  },
});

export default theme;
