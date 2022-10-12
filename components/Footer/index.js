import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box textAlign="center" py={3}>
      <Typography component="p" variant="span" color="danger.main">
        تمامی حقوق های مادی و معنوی مربوط به محمد مهدی صائبی محفوظ می باشد.
      </Typography>
    </Box>
  );
};

export default Footer;
