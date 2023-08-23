import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface IProps {
  isFetching: boolean;
  children: React.ReactNode;
}

const Loading = ({ isFetching, children }: IProps) => {
  if (isFetching) {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}>
          <CircularProgress color="inherit" />
        </Box>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
