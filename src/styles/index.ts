import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const CenteredBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  marginBottom: "10px",
});

export const BaseCard = styled(Card)({
  padding: "5px",
  maxWidth: "450px",
  width: "100%",
});

export const CardImg = styled(BaseCard)({
  minHeight: "425px",
});
