import { useState } from "react";
import { useSessionStore } from "../../store/session.store";

const useAllRoutines = () => {
  const [openNewRoutine, setOpenNewRoutine] = useState(false);
  const routines = useSessionStore((state) => state.routines);
  console.log(routines, "aca");
  const handleOpenNewRoutine = () => {
    setOpenNewRoutine(!openNewRoutine);
  };

  return { openNewRoutine, handleOpenNewRoutine };
};

export default useAllRoutines;
