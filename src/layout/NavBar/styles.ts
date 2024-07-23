import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

export const NavbarContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  padding: "1rem 3rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const NavbarText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2rem",
}));

export const TitleLogo = styled(Typography)(() => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
}));

export const NavbarMenu = styled(Typography)(() => ({
  color: "white",
  textDecoration: "underline",
  cursor: "pointer",
}));

export const MenuItemStyled = styled(MenuItem)(() => ({
  color: "black",
}));
