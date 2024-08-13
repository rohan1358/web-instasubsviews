import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        paddingY: 10,
        textAlign: "center",
      }}
    >
      <img
        src={"/images/logo.png"}
        width={400}
        height={400}
        style={{
          borderRadius: 400 / 2,
          marginTop: 20,
        }}
        alt="logo"
      />
      <Box
        sx={{
          height: 10,
        }}
      />

      <Typography variant="h3">Insta Subs Views</Typography>
    </Box>
  );
}
