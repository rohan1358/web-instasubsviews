import { Box, Container, Grid, Typography } from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#3D4E64",
          borderBottomRightRadius: 150,
          borderBottomLeftRadius: 150,
          overflow: "hidden",
          color: "white",
          pt: 5,
          pb: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mx: 10,
            fontWeight: 700,
            fontSize: 36,
          }}
        >
          Rohan Adi Priyatna
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mx: 15,
            fontWeight: 500,
            fontSize: 36,
          }}
        >
          FullStack Developer
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          color: "black",
          pt: 5,
          pb: 3,
        }}
      >
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
          Summary
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          I am a web and mobile application developer, with more than 4 years of
          experience and I will continue to pursue the profession as a
          programmer
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Left />
        <Right />
      </Grid>
      <Portfolio />
      <Box
        sx={{
          height: 56,
        }}
      />
    </Container>
  );
}
