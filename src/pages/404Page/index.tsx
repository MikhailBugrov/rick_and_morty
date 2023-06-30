import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';

const Page404 = () => {
  return (
    <Stack>
      <Typography variant="h4" mt={7}>
        404 - Page Not Found
      </Typography>
      <Typography>The page you are looking for does not exist</Typography>
      <Typography>Page doesn't exist</Typography>
      <Button sx={{ width: '250px', display: 'block', margin: '0 auto' }} component={Link} to={'/'}>
        Back to main page
      </Button>
    </Stack>
  );
};

export default Page404;