const useRutine = () => {
  const routine = [
    {
        "exerciseId": 1,
        "series": 4
    },
    {
        "exerciseId": 2,
        "series": 4
    }
]
;
  return {
    name: "Dia de piernas",
    description: "Rutina de piernas para hacer en casa",
    routine,
  };
};

export default useRutine;
