import { Box, Grid, ListItem, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const bmg = [
  "develop the web in accordance with the request given by the project manager",
  "evaluate and update the web view",
  "keep the code looking neater and easier to understand and when development is done",
];

const sekilasAja = [
  "at this company I work part-time from 5 pm - 12 night, here occupies the position as a full stack developer (web, android app).",
  "evaluate and update the web view",
  "keep the code looking neater and easier to understand and when development is done",
];

const experience = [
  {
    company: "Boston Makmur Gemilang - 2019",
    position: "Web Fontend Developer",
    jobdesk: bmg,
  },
  {
    company: "SekilasAja! Company - 2021",
    position: "Fullstack Developer",
    jobdesk: sekilasAja,
  },
  {
    company: "Freelancer",
    position: "Fullstack Developer",
    jobdesk: [
      "I live as a freelance also in a different company with job desk as full stack developer",
    ],
  },
  {
    company: "Cube Social App - 2023",
    position: "Android Developer (React Native)",
    jobdesk: ["updating old sources", "implementing new features"],
  },
];

function Right() {
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
          Experience
        </Typography>
        {experience.map((data) => {
          return (
            <>
              <Typography
                variant="body2"
                sx={{
                  color: "#494847",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {data.position}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#996860",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {data.company}
              </Typography>
              {data.jobdesk.map((data) => {
                return (
                  <ListItem
                    key={data}
                    sx={{
                      alignItems: "flex-start",
                    }}
                  >
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
                      sx={{
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      {data}
                    </Typography>
                  </ListItem>
                );
              })}
            </>
          );
        })}
        <Typography
          variant="body2"
          sx={{
            color: "#494847",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Web Fontend Developer
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#996860",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Boston Makmur Gemilang - 2019
        </Typography>
        {bmg.map((data) => {
          return (
            <ListItem
              key={data}
              sx={{
                alignItems: "flex-start",
              }}
            >
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
                sx={{
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                {data}
              </Typography>
            </ListItem>
          );
        })}
      </Box>
    </Grid>
  );
}

export default Right;
