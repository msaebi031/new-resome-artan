import { Box, Container, Link, Tooltip, Typography } from "@mui/material";
import { Fragment } from "react";
import ReactTypingEffect from "react-typing-effect";
import {
  Instagram,
  WhatsApp,
  Telegram,
  GitHub,
  Twitter,
} from "@mui/icons-material";

const Header = () => {
  const socailMedia = [
    { icon: <Twitter />, link: "#", text: "Twitter" },
    {
      icon: <Instagram />,
      link: "https://instagram.com/m.saebi82",
      text: "Instagram",
    },
    {
      icon: <WhatsApp />,
      link: "https://api.whatsapp.com/send?phone=989909756978",
      text: "WhatsApp",
    },
    { icon: <Telegram />, link: "https://t.me/mr_saebi", text: "Telegram" },
    { icon: <GitHub />, link: "https://github.com/msaebi031", text: "GitHub" },
  ];

  return (
    <Fragment>
      <Box className="bg-header">
        <Container maxWidth="md">
          <Box textAlign={{ xs: "right", md: "center" }} py={2}>
            <Link href="https://target-designer.com">
              <Typography
                className="font-hurricane target"
                variant="h2"
                component="h2"
                color={{ xs: "light.main", md: "dark.main" }}
                fontSize={{ xs: "3rem", sm: "3.5rem" }}
              >
                Target Designer
              </Typography>
            </Link>
          </Box>
          <Box
            mt={8.5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="65vh"
          >
            <Typography
              className="font-bold title"
              variant="h2"
              component="h1"
              color={{ xs: "light.light", md: "dark.light" }}
            >
              محمد مهدی صائبی
            </Typography>
            <ReactTypingEffect
              text={["طراح و توسعه دهنده وب.", "عضو تیم تارگت دیزاینر!"]}
              className="typing"
              speed="100"
              typingDelay="100"
              eraseSpeed="100"
              cursor=" "
            />
            <Box className="up-btn">
              <Link href="/pdf/saebi.pdf">
                <Box className="button-resume">دانلود رزومه</Box>
              </Link>
            </Box>
            <Box>
              {socailMedia.map((media, index) => (
                <Tooltip title={media.text} key={index}>
                  <Link
                    href={media.link}
                    className="icon-socailMedia"
                    sx={{
                      paddingLeft: { xs: 1.5, sm: 4 },
                    }}
                  >
                    {media.icon}
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
