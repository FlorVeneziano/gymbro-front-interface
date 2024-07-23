import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const RutinesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  minWidth: "600px",
  padding: "1.5rem 1.5rem",
  borderRadius: "1rem",
  backgroundColor: "#2a2a2a",
  [theme.breakpoints.down("md")]: {
    width: "320px",
  },
}));

export const RutineTitle = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 600,
}));

export const Rutines = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
}));

export const NewRutine = styled(Button)(() => ({
  backgroundColor: "#f50057",
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 600,
  width: "50px",
  minWidth: "50px",
  height: "50px",
  borderRadius: "50%",
  alignSelf: "flex-end",
  padding: "0",
  "&:hover": {
    backgroundColor: "#ff5983",
  },
}));
