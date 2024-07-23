import { useState } from "react";

const useNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (option: string) => {
    // Aquí puedes manejar la lógica cuando se selecciona una opción del menú
    console.log(`Seleccionaste: ${option}`);
    handleClose();
  };
  return {
    handleClick,
    anchorEl,
    handleClose,
    handleItemClick,
  };
};

export default useNavbar;
