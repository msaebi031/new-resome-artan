import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const Work = () => {
  const workExamples = [
    {
      text: "دهیاری حسین اّباد",
      src: "/img/work/دهیاری حسین اّباد.png",
      url: "https://hosseinabad-cn.ir",
    },
    {
      text: "فروشگاه نسیم",
      src: "/img/work/فروشگاه نسیم.png",
      url: "https://nasim-market.ir",
    },
    {
      text: "بازی شلم و حکم",
      src: "/img/work/بازی شلم و حکم.png",
      url: "https://passoversnightmare.com",
    },

    { text: "تاپ لرن (en)", src: "/img/work/تاپ لرن (en).png", url: "" },
  ];
  return (
    <Box mt={8} id="Abilist" data-aos="fade">
      <Typography
        className="font-bold title-sub"
        variant="h4"
        component="h2"
        color="dark.main"
      >
        نمونه کار های من
      </Typography>

      <Box className="card" mt={5}>
        <Grid container className="works">
          {workExamples.map((item, index) => (
            <Grid
              item
              textAlign="center"
              pb={2}
              key={index}
              xs={12}
              sm={6}
              md={12}
              data-aos="fade"
            >
              <Box className="nemone-container">
                <Box
                  component="img"
                  src={item.src}
                  className="img-work"
                  alt={item.text}
                />
                <Box className="nemone-middle">
                  <Button
                    className="font-light color-white"
                    size="large"
                    color="danger"
                    variant="contained"
                    href={item.url}
                    target="_blank"
                  >
                    {item.text}
                  </Button>
                </Box>
              </Box>
              <Divider className="divider-work" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Work;
