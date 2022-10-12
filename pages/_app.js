import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import "react-circular-progressbar/dist/styles.css";
import "aos/dist/aos.css";
import "../public/css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
