import WhoYou from './whoYou';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Box sx={{ maxWidth: 550, mx: 'auto', mt: 4, px: 2 }}>
        <Typography variant="h3">
          Welcome!
        </Typography>
        <Typography>
          Here, you can find information about the characters, locations, and episodes from the series "Rick and Morty"
        </Typography>
      </Box>
      <WhoYou />
    </>
  );
};

export default HomePage;