import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CardContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  padding: "1rem 1rem",
  borderRadius: "1rem",
  backgroundColor: "#3a3a3a",
  [theme.breakpoints.down("md")]: {
  },
}));

export const CardTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "white",
});

export const CardButton = styled(Button)({
    backgroundColor: "#ffd700",
    color: "black",
    borderRadius: "5rem",
    border: '1px solid white',
    width: "100%",
    "&:hover": {
        backgroundColor: "#ffae00",
    },
    });