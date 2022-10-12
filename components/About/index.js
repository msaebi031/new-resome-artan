import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box mt={8} id="Property" data-aos="fade">
      <Typography
        className="font-bold title-sub"
        variant="h4"
        component="h2"
        color="dark.main"
      >
        درباره من
      </Typography>
      <Box className="card" mt={5}>
        <Typography
          variant="subtitle1"
          component="p"
          color="dark.varyLight"
          data-aos="fade"
          data-aos-delay="300"
        >
          بنده محمد مهدی صائبی عضو تیم برنامه نویسی تارگت دیزاینر هستم.19 سال سن
          دارم و برنامه نویسی وب را از سال 1398 بصورت حرفه ای شروع کرده ام در
          این 2و3 سال تجربه همکاری با ارگان های دولتی و خصوصی را داشته ام و در
          سال 1401 نیز به تیم برنامه نویسی تارگت دیزاینر پیوستم .
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
