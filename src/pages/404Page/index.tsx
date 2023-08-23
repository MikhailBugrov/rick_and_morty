import { Link } from "react-router-dom";

import { Typography, Button } from "@mui/material";
import { CenteredBox } from "../../styles";

const Page404 = () => (
  <CenteredBox sx={{ flexDirection: "column" }}>
    <Typography variant="h4" mt={7} color="error">
      404 - Page Not Found
    </Typography>
    <Typography>Sorry, the page you requested was not found</Typography>
    <Button sx={{ width: "250px", display: "block", margin: "20px" }} component={Link} to="/">
      Back to main page
    </Button>
  </CenteredBox>
);

export default Page404;
