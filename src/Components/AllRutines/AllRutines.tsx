import React from "react";
import RutinesCard from "../RutinesCard/RutinesCard";
import { RutinesContainer, RutineTitle, Rutines, NewRutine } from "./styles";
import Modal from "@mui/material/Modal";
import useAllRoutines from "./useAllRoutines";
import NewRoutine from "../Modals/NewRoutine/NewRoutine";

const AllRutines = () => {
  const { openNewRoutine, handleOpenNewRoutine } = useAllRoutines();
  return (
    <RutinesContainer>
      <RutineTitle>Mis rutinas</RutineTitle>
      <Rutines>
        <RutinesCard
          name={"Día de piernas"}
          date={"2023-07-22"}
          exercises={5}
          id={1}
        />
        <RutinesCard
          name={"Día de espalda"}
          date={"2023-07-24"}
          exercises={3}
          id={2}
        />
      </Rutines>
      <NewRutine onClick={handleOpenNewRoutine}>+</NewRutine>
      <Modal
        open={openNewRoutine}
        onClose={handleOpenNewRoutine}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewRoutine handleOpenNewRoutine={handleOpenNewRoutine} />
      </Modal>
    </RutinesContainer>
  );
};

export default AllRutines;
