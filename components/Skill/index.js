import { Box, Typography } from "@mui/material";
import { Line } from "rc-progress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Skill = () => {
  const items = [
    { text: "JavaScript", number: 70 },
    { text: "TypeScript", number: 86 },
    { text: "React Js", number: 89 },
    { text: "Next Js", number: 90 },
    { text: "Node Js", number: 65 },
    { text: "Material Ui", number: 95 },
    { text: "Bootstrap", number: 80 },
    { text: "Html & Css", number: 91 },
    { text: "Sass", number: 90 },
    { text: "Redux", number: 70 },
    { text: "Ui", number: 90 },
    { text: "Ux", number: 90 },
  ];

  return (
    <Box mt={8} id="Skill" data-aos="fade">
      <Typography
        className="font-bold title-sub"
        variant="h4"
        component="h2"
        color="dark.main"
      >
        توانایی های من
      </Typography>

      <Box className="card ltr" mt={5} textAlign="left">
        {items.map((item, index) => (
          <div key={index} data-aos="fade">
            <Box textAlign="left" mb={-2.5}>
              <Typography component="p" variant="p">
                {item.text}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box width={`${item.number}%`}>
                <Line
                  percent={100}
                  strokeColor="#19b179"
                  trailColor="#fff"
                  className="circle"
                  trailWidth={50}
                />
              </Box>
              <Box width={"9%"}>
                <CircularProgressbar
                  value={100}
                  text={`${item.number}%`}
                  styles={buildStyles({
                    textSize: "25px",
                    pathColor: "#19b179",
                    textColor: "#000",
                  })}
                />
              </Box>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Skill;
