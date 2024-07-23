import Typography from "@mui/material/Typography";
import React from "react";
import useRutine from "./useRutine";
import { RoutineContainer, RoutineList, RoutineTitle } from "./styles";
import Chip from "@mui/material/Chip";

const Rutine = () => {
  const { name, description, routine } = useRutine();
  return (
    <RoutineContainer>
      <RoutineTitle>{name}</RoutineTitle>
      <Typography variant="body1" sx={{ color: "gray" }}>
        {description}
      </Typography>
      {routine.map((exercise) => (
        <Exercises
          key={exercise.exerciseId}
          exerciseId={exercise.exerciseId}
          series={exercise.series}
        />
      ))}
    </RoutineContainer>
  );
};

const Exercises = ({
  exerciseId,
  series,
}: {
  exerciseId: number;
  series: number;
}) => {
  return (
    <RoutineList>
      <Chip label={`ejercicio ${exerciseId}`} variant="outlined" />
      <Chip label={`series: ${series}`} variant="outlined" />
    </RoutineList>
  );
};

export default Rutine;
