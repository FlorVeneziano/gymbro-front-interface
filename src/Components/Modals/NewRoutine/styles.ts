import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const ContainerModal = styled(Box)(() => ({
  margin: "20vh auto 0",
  width: "50%",
  minWidth: "300px",
  backgroundColor: "#878889",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "1rem",
  position: 'relative',
}));

export const ExercisesBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
}));

export const Cancel = styled(Button)(() => ({
  backgroundColor: "#f50057",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  width: "30px",
  minWidth: "30px",
  height: "30px",
  borderRadius: "50%",
  padding: "0",
  "&:hover": {
    backgroundColor: "#ff5983",
  },
}));


export const NewExercises = styled(Button)(() => ({
  backgroundColor: "green",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  width: "30px",
  minWidth: "30px",
  height: "30px",
  borderRadius: "50%",
  padding: "0",
  "&:hover": {
    backgroundColor: "#ff5983",
  },
}));

export const CloseModal = styled(Button)(() => ({
  backgroundColor: "red",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  width: "30px",
  minWidth: "30px",
  height: "30px",
  borderRadius: "50%",
  padding: "0",
  position: 'absolute',
  right: '1rem',
  top: '1rem',
}));

export const MenuItemStyled = styled(MenuItem)(() => ({
    color: "black",
  }));