import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Cancel, ContainerModal, ExercisesBox, NewExercises, MenuItemStyled, CloseModal } from "./styles";
import Typography from "@mui/material/Typography";

const NewRoutine = ({handleOpenNewRoutine}: any) => {
  return (
    <ContainerModal>
        <Typography variant="h4" sx={{ fontWeight: 'bold'}}>Crea tu nueva rutina</Typography>
      <TextField
        id="nameNewRoutine"
        label="Nombre de la rutina"
        variant="outlined"
      />
      <TextField
        id="descriptionNewRoutine"
        label="Descripción"
        variant="outlined"
      />
      <Exercises />
      <Exercises />
      <Exercises />
      <NewExercises onClick={() => console.log("Imagina que agregamos otro ejercicio")}>
        +
      </NewExercises>
      <CloseModal onClick={handleOpenNewRoutine}>
        X
      </CloseModal>
    </ContainerModal>
  );
};

const Exercises = () => {
  return (
    <ExercisesBox>
      <FormControl sx={{width: '50%'}}>
        <InputLabel id="demo-simple-select-label">Ejercicio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"allExercices"}
          label="Age"
          onChange={() => {}}
        >
          <MenuItemStyled value={10}>ejercicio 1</MenuItemStyled>
          <MenuItemStyled value={20}>ejercicio 2</MenuItemStyled>
          <MenuItemStyled value={30}>ejercicio 3</MenuItemStyled>
        </Select>
      </FormControl>
      <TextField id="seriesNewRoutine" label="Series" variant="outlined" sx={{width: '50%'}} />
      <Cancel onClick={() => console.log("Imagina que borramos ese ejercicio")}>
        X
      </Cancel>
    </ExercisesBox>
  );
};
export default NewRoutine;
