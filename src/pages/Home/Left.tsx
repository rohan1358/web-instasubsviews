import {
  Box,
  Grid,
  LinearProgress,
  linearProgressClasses,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#9B6E65" : "#ffb0a3",
  },
  width: "50%",
}));

const listSkill = [
  {
    title: "JavaScript",
    progress: 90,
    key: 1,
  },
  {
    title: "NodeJS",
    progress: 70,
    key: 2,
  },
  {
    title: "HTML",
    progress: 80,
    key: 3,
  },
  {
    title: "Css",
    progress: 80,
    key: 4,
  },
  {
    title: "ReactJS",
    progress: 80,
    key: 5,
  },
  {
    title: "React Native",
    progress: 80,
    key: 6,
  },
  {
    title: "MySql",
    progress: 50,
    key: 7,
  },
  {
    title: "Firebase",
    progress: 75,
    key: 8,
  },
  {
    title: "Dart",
    progress: 20,
    key: 9,
  },
  {
    title: "Flutter",
    progress: 20,
    key: 10,
  },
];

const listContact = [
  {
    text: "691rohan@gmail.com",
    icon: EmailIcon,
    key: 1,
  },
  {
    text: "+6285524531474",
    icon: PhoneIcon,
    key: 2,
  },
  {
    text: "Jl. Seha II No.8, RT.7/RW.10, Grogol Sel., Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12220",
    icon: LocationOnIcon,
    key: 3,
  },
];

function Left() {
  return (
    <Grid item xs={6}>
      <Box>
        <Typography
          variant="body1"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#996860",
            fontSize: 32,
            fontWeight: 500,
          }}
        >
          Education
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#494847",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Bootcamp Arkademy
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#996860",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Software Engineering, 2019
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#000000",
            fontSize: 16,
          }}
        >
          Study programs focused on web and mobile development
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="body1"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#996860",
            fontSize: 32,
            fontWeight: 500,
          }}
        >
          Skill
        </Typography>
        <List dense={true}>
          {listSkill.map((data) => {
            return (
              <ListItem key={data.key}>
                <Box
                  sx={{
                    mr: 1,
                  }}
                >
                  <CircleIcon
                    sx={{
                      fontSize: 10,
                    }}
                  />
                </Box>
                <Typography
                  width={"50%"}
                  sx={{
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {data.title}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={data.progress}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#996860",
            fontSize: 32,
            fontWeight: 500,
          }}
        >
          Contact
        </Typography>
        <List dense={true}>
          {listContact.map((data) => {
            return (
              <ListItem
                key={data.key}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    backgroundColor: "#3E5066",
                    display: "flex",
                    borderRadius: 1,
                    p: 0.3,
                  }}
                >
                  <data.icon
                    sx={{
                      fontSize: 30,
                      color: "white",
                    }}
                  />
                </Box>
                <Typography
                  width={"50%"}
                  sx={{
                    fontSize: 18,
                    fontWeight: "500",
                  }}
                >
                  {data.text}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Grid>
  );
}

export default Left;
