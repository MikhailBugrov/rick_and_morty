import { Typography, AppBar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static" sx={{ mt: 'auto' }}>
      <Typography color="black">
        Powered by the Rick and Morty API
      </Typography>
    </AppBar>
  );
}