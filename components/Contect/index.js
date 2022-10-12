import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { EmailOutlined, PhoneEnabledOutlined } from "@mui/icons-material";

const Contect = () => {
  return (
    <Box mt={8} id="Contect" data-aos="fade">
      <Typography
        className="font-bold title-sub"
        variant="h4"
        component="h2"
        color="dark.main"
      >
        ارتباط با من
      </Typography>
      <Box mt={2} data-aos="fade" data-aos-delay="300">
        <IconButton>
          <EmailOutlined />
        </IconButton>
        <Typography
          className="font-bold"
          variant="p"
          component="span"
          color="dark.light"
        >
          M.saebi9@gmail.com
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <PhoneEnabledOutlined />
        </IconButton>
        <Typography
          className="font-bold"
          variant="p"
          component="span"
          color="dark.light"
        >
          0901-260-3475{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Contect;
