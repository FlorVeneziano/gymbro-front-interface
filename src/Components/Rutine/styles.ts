import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const RoutineContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: '600px',
  height: "90vh",
  marginTop: '10vh',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
  }
}));

export const RoutineTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
});

export const RoutineList = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  backgroundColor: "#3a3a3a",
  borderRadius: "1rem",
  padding: "0.8rem",
  width: '200px',
});