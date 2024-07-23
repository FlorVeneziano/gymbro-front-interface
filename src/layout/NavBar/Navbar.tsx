import useNavbar from "./useNavbar";
import { Menu, Box } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  NavbarContainer,
  NavbarText,
  TitleLogo,
  NavbarMenu,
  MenuItemStyled,
} from "./styles";

const Navbar = () => {
  const { handleClick, anchorEl, handleClose, handleItemClick } = useNavbar();
  return (
    <Box>
      <NavbarContainer>
        <NavbarText>
          <TitleLogo>Gymbro </TitleLogo>
          <Link to="/">
            <NavbarMenu>Mis rutinas </NavbarMenu>
          </Link>
          <NavbarMenu>Guías </NavbarMenu>
        </NavbarText>

        <Box>
          <Avatar
            src="/broken-image.jpg"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          />
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItemStyled onClick={() => handleItemClick("Opción 1")}>
              Cerrar sesión
            </MenuItemStyled>
          </Menu>
        </Box>
      </NavbarContainer>
      <Outlet />
    </Box>
  );
};

export default Navbar;
